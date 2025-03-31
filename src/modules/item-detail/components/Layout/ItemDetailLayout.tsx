import Breadcrumb from "../Breadcrumb/Breadcrumb";
import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";
import styles from "./ItemDetailLayout.module.scss";

const ItemDetailLayout = () => {
  return (
    <>
      <Breadcrumb />
      <div className={styles.container}>
        <div className={styles.image_area}>
          <ImageProduct />
        </div>
        <div className={styles.info_area}>
          <ProductInfo />
        </div>
        <div className={styles.description_area}>
          <ProductDescription />
        </div>
      </div>
    </>
  );
};

export default ItemDetailLayout;
