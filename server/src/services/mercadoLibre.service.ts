import axios from "axios";
import { ML_API_URLS } from "../urls";
import {
  IItem,
  IItemResponse,
  IMLSearchResponse,
} from "../interfaces/item.interface";

export class MercadoLibreService {
  async searchItems(query: string, userAgent: string): Promise<IItemResponse> {
    try {
      const searchResponse = await this.fetchSearchResults(query, userAgent);
      const categories = await this.fetchCategories(searchResponse.results[0]);
      const items = this.transformItems(searchResponse.results);

      return {
        author: {
          name: "Gabriel",
          lastname: "Cardozo",
        },
        categories,
        items,
      };
    } catch (error) {
      console.error("Error en la búsqueda de items:", error);
      throw error;
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

  private async fetchCategories(firstItem: IItem): Promise<string[]> {
    if (!firstItem?.category_id) return [];

    try {
      const response = await axios.get(
        `${ML_API_URLS.CATEGORIES}/${firstItem.category_id}`
      );
      return response.data.path_from_root.map((category: any) => category.name);
    } catch (error) {
      console.error("Error al obtener categorías:", error);
      return [];
    }
  }

  private transformItems(results: IItem[]): IItemResponse["items"] {
    return results.slice(0, 6).map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.price.currency_id,
        amount: item.price.amount,
        decimals: 2,
      },
      picture: item.pictures?.stack?.normal || item.thumbnail,
      free_shipping: item.tags.includes("free_shipping"),
      city: item.seller_info.address.city.name,
    }));
  }
}
