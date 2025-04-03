import { Product } from "../../models/models";
import styles from "./ProductItem.module.scss";
import ShippingIcon from "@/assets/icons/ic_shipping.webp";
import { Link, useSearchParams } from "react-router-dom";
import { ROUTES } from "@/common/urls";

const ProductItem = ({ product }: { product: Product }) => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";
  const productUrl = ROUTES.PRODUCT_DETAIL(product.id, search);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
    }
  };

  return (
    <Link
      to={productUrl}
      className={styles.product_container}
      prefetch="intent"
      onKeyDown={handleKeyDown}
      role="button"
      aria-label="Ver producto"
      tabIndex={0}
    >
      <div className={styles.image}>
        <img
          src={product.picture}
          alt={product.title}
          loading="lazy"
          width="180"
          height="180"
        />
      </div>
      <div className={styles.price}>
        <span>$ {product.price.amount.toLocaleString("es-AR")}</span>
        {product.free_shipping && (
          <img
            src={ShippingIcon}
            alt="Envío gratis"
            className={styles.shipping_icon}
            width="20"
            height="20"
          />
        )}
      </div>
      <div className={styles.title}>
        <span>{product.title}</span>
      </div>
      <div className={styles.location}>
        <span>{product.city}</span>
      </div>
    </Link>
  );
};

export default ProductItem;
