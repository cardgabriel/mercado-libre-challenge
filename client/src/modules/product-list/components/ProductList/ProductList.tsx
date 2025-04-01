import styles from "./ProductList.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { Product } from "../../models/models";

interface ProductListProps {
  products?: Product[];
  categories?: string[];
}

const ProductList = ({ products }: ProductListProps) => {
  return (
    <div className={styles.container}>
      {products?.map((product) => (
        <ProductItem
          key={product.id}
          product={{
            id: product.id,
            thumbnail: product.picture,
            title: product.title,
            price: product.price.amount,
            seller_address: {
              state: {
                name: "Capital Federal", // TODO: Agregar ubicación real
              },
            },
          }}
        />
      ))}
    </div>
  );
};

export default ProductList;
