export interface ProductDetail {
  author: {
    name: string;
    lastname: string;
  };
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
}

export interface ProductInfoProps {
  product: Pick<ProductDetail, "title" | "price" | "free_shipping" | "city">;
}
