const API_BASE_URL = "http://localhost:3000/api";

export const API_URLS = {
  todos: `${API_BASE_URL}/todos`,
  GET_PRODUCTS: (query: string) =>
    `${API_BASE_URL}/items?q=${encodeURIComponent(query)}`,
};
