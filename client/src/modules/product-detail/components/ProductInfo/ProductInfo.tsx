import styles from "./ProductInfo.module.scss";

const MOCK_PRODUCT = {
  soldQuantity: 150,
  title: "iPhone 13 Pro Max 256GB",
  price: 999.99,
};

const ProductInfo = () => {
  return (
    <div className={styles.product_container}>
      <div className={styles.sold_quantity}>
        {MOCK_PRODUCT.soldQuantity} vendidos
      </div>
      <div className={styles.product_title}>
        <h1>{MOCK_PRODUCT.title}</h1>
      </div>
      <div className={styles.product_price}>
        $
        {MOCK_PRODUCT.price.toLocaleString("es-AR", {
          minimumFractionDigits: 2,
        })}
      </div>
      <div className={styles.button_container}>
        <button className={styles.buy_button}>Comprar</button>
      </div>
    </div>
  );
};

export default ProductInfo;
