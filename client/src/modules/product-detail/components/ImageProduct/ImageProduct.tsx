import styles from "./ImageProduct.module.scss";

const ImageProduct = ({
  picture,
  title = "Producto",
}: {
  picture: string;
  title?: string;
}) => {
  return (
    <div className={styles.image_container}>
      <img
        src={picture}
        alt={`Imagen de ${title}`}
        className={styles.product_image}
        loading="lazy"
        width="680"
        height="500"
      />
    </div>
  );
};

export default ImageProduct;
