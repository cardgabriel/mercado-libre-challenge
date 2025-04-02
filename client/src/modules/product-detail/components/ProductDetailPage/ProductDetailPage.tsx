import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";
import styles from "./ProductDetailPage.module.scss";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";
import { useParams } from "react-router-dom";
import useQuery from "@/modules/common/hooks/useQuery";
import { API_URLS } from "@/modules/common/urls";
import NotFound from "@/modules/common/components/NotFound/NotFound";
import Loading from "@/modules/common/components/Loading/Loading";

const ProductDetailLayout = () => {
  const { id } = useParams();

  const {
    data: productData,
    loading,
    error,
  } = useQuery(API_URLS.GET_PRODUCT_DETAIL(id!));

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  console.log(productData);

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
