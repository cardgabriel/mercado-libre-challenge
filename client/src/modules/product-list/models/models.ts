export interface ProductItemProps {
  product: {
    id: string;
    thumbnail: string;
    title: string;
    price: number;
    seller_address: {
      state: {
        name: string;
      };
    };
  };
}

export interface Item {
  id: string;
  title: string;
  price: {
    currency: string;
    amount: number;
    decimals: number;
  };
  picture: string;
  condition: string;
  free_shipping: boolean;
}

export interface ItemsResponse {
  author: {
    name: string;
    lastname: string;
  };
  categories: string[];
  items: Item[];
}
