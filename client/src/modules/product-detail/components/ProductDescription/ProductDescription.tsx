import styles from "./ProductDescription.module.scss";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.description_container}>
      <h2 className={styles.description_title}>Descripción del producto</h2>
      <p className={styles.description_text}>{description}</p>
    </div>
  );
};

export default ProductDescription;
