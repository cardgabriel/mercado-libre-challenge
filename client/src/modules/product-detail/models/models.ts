export interface ProductDetail {
  author: {
    name: string;
    lastname: string;
  };
  item: {
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
    description: string;
  };
  categories: string[];
}

export interface ProductInfoProps {
  product: Pick<
    ProductDetail["item"],
    "title" | "price" | "free_shipping" | "city"
  >;
}
