import styles from "./ListProductsLayout.module.scss";
import { productsMock } from "./mock";

const ListProductsLayout = () => {
  return (
    <div className={styles.container}>
      {productsMock.map((product) => (
        <div key={product.id} className={styles.product_container}>
          <div className={styles.image}>
            <img src={product.thumbnail} alt={product.title} />
          </div>
          <div className={styles.price}>
            <span>$ {product.price.toLocaleString("es-AR")}</span>
          </div>
          <div className={styles.title}>
            <span>{product.title}</span>
          </div>
          <div className={styles.location}>
            <span>{product.seller_address.state.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProductsLayout;
