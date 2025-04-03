import styles from "./ProductInfo.module.scss";
import { ProductInfoProps } from "../../models/models";

const ProductInfo = ({ product }: ProductInfoProps) => {
  return (
    <div className={styles.product_container}>
      <div className={styles.sold_quantity}>Nuevo</div>
      <div className={styles.product_title}>
        <h1 id="product-title">{product?.title}</h1>
      </div>
      <div className={styles.product_price} id="product-price">
        ${" "}
        {product?.price.amount.toLocaleString("es-AR", {
          minimumFractionDigits: product?.price.decimals,
        })}
      </div>
      <div className={styles.button_container}>
        <button
          className={styles.buy_button}
          aria-label="Agregar al carrito"
          aria-describedby="product-title product-price"
        >
          Comprar
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
