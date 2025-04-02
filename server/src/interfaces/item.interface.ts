export interface IItem {
  id: string;
  title: string;
  price: {
    currency_id: string;
    amount: number;
  };
  thumbnail: string;
  pictures?: {
    stack?: {
      normal: string;
    };
  };
  condition: string;
  tags: string[];
  category_id?: string;
  seller_info: {
    address: {
      city: { name: string };
    };
  };
}

export interface IItemResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: {
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
  }[];
}

export interface IMLSearchResponse {
  results: IItem[];
  filters: any[];
}
