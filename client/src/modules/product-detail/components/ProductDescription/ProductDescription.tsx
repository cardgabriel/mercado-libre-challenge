import styles from "./ProductDescription.module.scss";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.description_container}>
      <h2 className={styles.description_title} id="product-description">
        Descripción del producto
      </h2>
      <p
        className={styles.description_text}
        aria-labelledby="product-description"
      >
        {description}
      </p>
    </div>
  );
};

export default ProductDescription;
