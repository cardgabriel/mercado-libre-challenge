const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000/api";

export const API_URLS = {
  GET_PRODUCTS: (query: string) =>
    `${API_URL}/items?q=${encodeURIComponent(query)}`,
  GET_PRODUCT_DETAIL: (id: string) => `${API_URL}/items/${id}`,
};

export const ROUTES = {
  PRODUCT_LIST: (search: string) =>
    `/items?search=${encodeURIComponent(search)}`,
  PRODUCT_DETAIL: (id: string, search: string) =>
    `/items/${id}?search=${encodeURIComponent(search)}`,
};
