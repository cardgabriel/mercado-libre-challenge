export interface IProduct {
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
  category_id?: string;
}

export interface IProductDetail {
  author: {
    name: string;
    lastname: string;
  };
  item: IProduct & {
    description: string;
  };
  categories: string[];
}

export interface IProductResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: IProduct[];
}

export interface IMLSearchResponse {
  results: IProduct[];
}
