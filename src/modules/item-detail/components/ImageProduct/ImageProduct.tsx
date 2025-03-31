import styles from "./ImageProduct.module.scss";
import PrimaryLogo from "@/assets/logos/logo_ML_2x.png.webp";

const ImageProduct = () => {
  return (
    <div className={styles.image_container}>
      <img
        src={PrimaryLogo}
        alt="Mercado Libre Logo"
        className={styles.product_image}
      />
    </div>
  );
};

export default ImageProduct; 