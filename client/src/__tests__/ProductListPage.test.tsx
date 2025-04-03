import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import ProductListPage from "@/modules/product-list/components/ProductListPage/ProductListPage";
import useFetch from "@/common/hooks/useFetch";
import { ProductsResponse } from "@/modules/product-list/models/models";

// Mock del hook useFetch
vi.mock("@/common/hooks/useFetch");

// Mock de componentes
vi.mock("@/common/components/Loading/Loading", () => ({
  default: () => <div data-testid="loading">Cargando...</div>,
}));

vi.mock("@/common/components/NotFound/NotFound", () => ({
  default: () => <div data-testid="not-found">Error - No encontrado</div>,
}));

vi.mock("@/common/components/Breadcrumb/Breadcrumb", () => ({
  default: ({ categories }: { categories: string[] }) => (
    <div data-testid="breadcrumb">{categories?.join(" > ")}</div>
  ),
}));

vi.mock("@/common/components/SEO/SEO", () => ({
  default: () => <div data-testid="seo">SEO Component</div>,
}));

vi.mock("@/modules/product-list/components/ProductItem/ProductItem", () => ({
  default: ({ product }: any) => (
    <div data-testid={`product-${product.id}`}>
      {product.title} - ${product.price.amount}
    </div>
  ),
}));

describe("ProductListPage", () => {
  const mockProductsResponse: ProductsResponse = {
    author: {
      name: "Test",
      lastname: "User",
    },
    categories: ["Electrónica", "Celulares", "Smartphones"],
    items: [
      {
        id: "MLA1",
        title: "iPhone 13",
        price: {
          currency: "ARS",
          amount: 300000,
          decimals: 0,
        },
        picture: "iphone.jpg",
        free_shipping: true,
        city: "Buenos Aires",
      },
      {
        id: "MLA2",
        title: "Samsung Galaxy S21",
        price: {
          currency: "ARS",
          amount: 250000,
          decimals: 0,
        },
        picture: "samsung.jpg",
        free_shipping: false,
        city: "Córdoba",
      },
    ],
  };

  const renderWithRouter = (search: string = "iphone") => {
    return render(
      <MemoryRouter initialEntries={[`/items?search=${search}`]}>
        <Routes>
          <Route path="/items" element={<ProductListPage />} />
        </Routes>
      </MemoryRouter>
    );
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("debería mostrar el componente de carga mientras los datos se están cargando", () => {
    // Mock del estado de carga
    vi.mocked(useFetch).mockReturnValue({
      data: null,
      loading: true,
      error: null,
    });

    renderWithRouter();

    // Verificar que se muestre el componente de carga
    expect(screen.getByTestId("loading")).toBeInTheDocument();
  });

  it("debería renderizar correctamente la lista de productos", () => {
    // Mock de respuesta exitosa
    vi.mocked(useFetch).mockReturnValue({
      data: mockProductsResponse,
      loading: false,
      error: null,
    });

    renderWithRouter();

    // Verificar que se muestre el breadcrumb con las categorías
    expect(screen.getByTestId("breadcrumb")).toHaveTextContent(
      "Electrónica > Celulares > Smartphones"
    );

    // Verificar que se muestren todos los productos
    expect(screen.getByTestId("product-MLA1")).toBeInTheDocument();
    expect(screen.getByTestId("product-MLA2")).toBeInTheDocument();

    // Verificar que se muestre el componente SEO
    expect(screen.getByTestId("seo")).toBeInTheDocument();
  });
});
