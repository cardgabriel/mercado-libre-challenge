import { Product } from "../../models/models";
import styles from "./ProductItem.module.scss";
import ShippingIcon from "@/assets/icons/ic_shipping.webp";
import { useNavigate, useSearchParams } from "react-router-dom";
import { ROUTES } from "@/common/urls";

const ProductItem = ({ product }: { product: Product }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const handleClick = () => {
    navigate(ROUTES.PRODUCT_DETAIL(product.id, search));
  };

  return (
    <div className={styles.product_container} onClick={handleClick}>
      <div className={styles.image}>
        <img src={product.picture} alt={product.title} />
      </div>
      <div className={styles.price}>
        <span>$ {product.price.amount.toLocaleString("es-AR")}</span>
        {product.free_shipping && (
          <img
            src={ShippingIcon}
            alt="Envío gratis"
            className={styles.shipping_icon}
          />
        )}
      </div>
      <div className={styles.title}>
        <span>{product.title}</span>
      </div>
      <div className={styles.location}>
        <span>{product.city}</span>
      </div>
    </div>
  );
};

export default ProductItem;
