export interface Product {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  free_shipping: boolean;
  city: string;
}

export interface ProductsResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Product[];
}
