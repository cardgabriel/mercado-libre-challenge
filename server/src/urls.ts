export const ML_API_URLS = {
  SEARCH: "https://frontend.mercadolibre.com/sites/MLA/search",
  CATEGORIES: "https://api.mercadolibre.com/categories",
  API: "https://api.mercadolibre.com",
  getItemDescriptionUrl: (id: string): string =>
    `${ML_API_URLS.API}/items/${id}/description`,
};
