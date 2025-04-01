import { ProductItemProps } from "../../models/models";
import styles from "./ProductItem.module.scss";
import ShippingIcon from "@/assets/icons/ic_shipping.webp";

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className={styles.product_container}>
      <div className={styles.image}>
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className={styles.price}>
        <span>$ {product.price.toLocaleString("es-AR")}</span>
        <img
          src={ShippingIcon}
          alt="Envío gratis"
          className={styles.shipping_icon}
        />
      </div>
      <div className={styles.title}>
        <span>{product.title}</span>
      </div>
      <div className={styles.location}>
        <span>{product.seller_address.state.name}</span>
      </div>
    </div>
  );
};

export default ProductItem;
