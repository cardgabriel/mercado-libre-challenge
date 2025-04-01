import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";
import styles from "./ProductDetailLayout.module.scss";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";

const ProductDetailLayout = () => {
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

export default ProductDetailLayout;
