import axios from "axios";
import { MercadoLibreService } from "./mercadoLibre.service";

// Mock axios
jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("MercadoLibreService", () => {
  let service: MercadoLibreService;

  beforeEach(() => {
    service = new MercadoLibreService();
    jest.clearAllMocks();
  });

  describe("searchProducts", () => {
    test("should return formatted products with expected structure", async () => {
      // Mock data para simular respuesta de la API de Mercado Libre
      const mockSearchResults = {
        data: {
          results: [
            {
              id: "product1",
              title: "Product 1",
              price: {
                currency_id: "ARS",
                amount: 100,
              },
              thumbnail: "http://example.com/image1.jpg",
              tags: ["free_shipping"],
              seller_info: {
                address: {
                  city: {
                    name: "Buenos Aires",
                  },
                },
              },
              category_id: "cat1",
            },
          ],
        },
      };

      const mockCategoryResult = {
        data: {
          path_from_root: [{ name: "Category 1" }, { name: "Category 2" }],
        },
      };

      // Configurar mocks
      mockedAxios.get.mockImplementation((url) => {
        if (url.includes("search")) {
          return Promise.resolve(mockSearchResults);
        } else if (url.includes("categories")) {
          return Promise.resolve(mockCategoryResult);
        }
        return Promise.reject(new Error("Not found"));
      });

      // Ejecutar
      const result = await service.searchProducts("test query", "test-agent");

      // Verificar estructura crítica de la respuesta
      expect(result).toHaveProperty("author");
      expect(result).toHaveProperty("categories");
      expect(result).toHaveProperty("items");
      expect(Array.isArray(result.items)).toBe(true);

      // Verificar transformaciones críticas de datos
      if (result.items.length > 0) {
        const item = result.items[0];
        expect(item).toHaveProperty("id");
        expect(item).toHaveProperty("title");
        expect(item).toHaveProperty("price");
        expect(item).toHaveProperty("free_shipping");
        expect(item.free_shipping).toBe(true); // Verifica que los tags se procesen correctamente
      }
    });

    test("should handle API errors gracefully", async () => {
      // Simular error de API
      mockedAxios.get.mockRejectedValue(new Error("API Error"));

      // Verificar que el servicio maneje los errores adecuadamente
      await expect(service.searchProducts("test", "agent")).rejects.toThrow();
    });
  });

  describe("getProductDetail", () => {
    test("should return product detail with the right data structure", async () => {
      // Mock data
      const mockSearchResults = {
        data: {
          results: [
            {
              id: "product1",
              title: "Product 1",
              price: {
                currency_id: "ARS",
                amount: 100,
              },
              thumbnail: "http://example.com/image1.jpg",
              tags: ["free_shipping"],
              seller_info: {
                address: {
                  city: {
                    name: "Buenos Aires",
                  },
                },
              },
              category_id: "cat1",
            },
          ],
        },
      };

      const mockDescription = {
        data: {
          plain_text: "Test description",
        },
      };

      const mockCategoryResult = {
        data: {
          path_from_root: [{ name: "Category 1" }],
        },
      };

      // Configurar mocks
      mockedAxios.get.mockImplementation((url) => {
        if (url.includes("search")) {
          return Promise.resolve(mockSearchResults);
        } else if (url.includes("description")) {
          return Promise.resolve(mockDescription);
        } else if (url.includes("categories")) {
          return Promise.resolve(mockCategoryResult);
        }
        return Promise.reject(new Error("Not found"));
      });

      // Ejecutar
      const result = await service.getProductDetail(
        "product1",
        "test-agent",
        "test query"
      );

      // Verificar estructura crítica
      expect(result).toHaveProperty("author");
      expect(result).toHaveProperty("item");
      expect(result).toHaveProperty("categories");

      // Verificar integración de descripción (parte crítica)
      expect(result.item).toHaveProperty("description", "Test description");
      expect(result.item).toHaveProperty("id", "product1");
    });
  });
});
