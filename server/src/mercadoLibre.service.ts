import axios from "axios";
import { ML_API_URLS } from "./urls";
import {
  IProduct,
  IProductResponse,
  IMLSearchResponse,
  IProductDetail,
} from "./product.interface";

export class MercadoLibreService {
  async searchProducts(
    query: string,
    userAgent: string
  ): Promise<IProductResponse> {
    try {
      const searchResponse = await this.fetchSearchResults(query, userAgent);
      const categories = await this.fetchCategories(searchResponse.results[0]);
      const products = searchResponse.results
        .slice(0, 4)
        .map((product) => this.formatProductResponse(product));

      return {
        author: {
          name: "Gabriel",
          lastname: "Cardozo",
        },
        categories,
        items: products,
      };
    } catch (error) {
      console.error("Error en la búsqueda de productos:", error);
      throw error;
    }
  }

  async getProductDetail(id: string): Promise<IProductDetail> {
    try {
      const [descriptionResponse, searchResponse] = await Promise.all([
        axios.get(ML_API_URLS.getItemDescriptionUrl(id)),
        axios.get(ML_API_URLS.SEARCH),
      ]);

      const description = descriptionResponse.data;
      const searchResults = searchResponse.data.results;

      // Buscar el producto específico en los resultados de búsqueda
      const searchProduct = searchResults.find(
        (result: any) => result.id === id
      );

      if (!searchProduct) {
        throw new Error("Producto no encontrado");
      }

      return {
        author: {
          name: "Gabriel",
          lastname: "Cardozo",
        },
        ...this.formatProductResponse(searchProduct, description),
      };
    } catch (error) {
      throw new Error("Error al obtener el detalle del producto");
    }
  }

  private async fetchSearchResults(
    query: string,
    userAgent: string
  ): Promise<IMLSearchResponse> {
    const response = await axios.get(`${ML_API_URLS.SEARCH}?q=${query}`, {
      headers: {
        "User-Agent": userAgent || "Mozilla/5.0",
      },
    });
    return response.data;
  }

  private async fetchCategories(firstProduct: IProduct): Promise<string[]> {
    if (!firstProduct?.category_id) return [];

    try {
      const response = await axios.get(
        `${ML_API_URLS.CATEGORIES}/${firstProduct.category_id}`
      );
      return response.data.path_from_root.map((category: any) => category.name);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      return [];
    }
  }

  private formatProductResponse(product: any, description?: any) {
    return {
      id: product.id,
      title: product.title,
      price: {
        currency: product.price.currency_id,
        amount: product.price.amount,
        decimals: 2,
      },
      picture: product.pictures?.stack?.normal || product.thumbnail,
      free_shipping: product.tags.includes("free_shipping"),
      city: product.seller_info.address.city.name,
      ...(description && { description: description.plain_text || "" }),
    };
  }
}
