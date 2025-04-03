import styles from "./ProductDescription.module.scss";
import ReactMarkdown from "react-markdown";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className={styles.description_container}>
      <h2 className={styles.description_title} id="product-description">
        Descripción del producto
      </h2>
      <div
        className={styles.description_text}
        aria-labelledby="product-description"
      >
        <ReactMarkdown>{description}</ReactMarkdown>
      </div>
    </div>
  );
};

export default ProductDescription;
