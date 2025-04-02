import styles from "./ProductDescription.module.scss";

const MOCK_DESCRIPTION = {
  title: "Descripción del producto",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
};

const ProductDescription = () => {
  return (
    <div className={styles.description_container}>
      <h2 className={styles.description_title}>{MOCK_DESCRIPTION.title}</h2>
      <p className={styles.description_text}>{MOCK_DESCRIPTION.description}</p>
    </div>
  );
};

export default ProductDescription;
