import styles from "./ImageProduct.module.scss";

const ImageProduct = ({ picture }: { picture: string }) => {
  return (
    <div className={styles.image_container}>
      <img src={picture} alt="Producto" className={styles.product_image} />
    </div>
  );
};

export default ImageProduct;
