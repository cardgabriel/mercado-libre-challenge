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
