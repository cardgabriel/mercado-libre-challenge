import styles from "./ProductList.module.scss";
import { productsMock } from "./mock";
import ProductItem from "../ProductItem/ProductItem";

const ProductList = () => {
  return (
    <div className={styles.container}>
      {productsMock.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
