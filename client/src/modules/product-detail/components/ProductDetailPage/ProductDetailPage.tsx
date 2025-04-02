import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";
import styles from "./ProductDetailPage.module.scss";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";
import { useParams, useSearchParams } from "react-router-dom";
import useQuery from "@/modules/common/hooks/useQuery";
import { API_URLS } from "@/modules/common/urls";
import NotFound from "@/modules/common/components/NotFound/NotFound";
import Loading from "@/modules/common/components/Loading/Loading";
import { ProductDetail } from "../../models/models";

const ProductDetailLayout = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: productData,
    loading,
    error,
  } = useQuery<ProductDetail>(API_URLS.GET_PRODUCT_DETAIL(id!), { q: search });

  if (loading) return <Loading />;
  if (error || !productData) return <NotFound />;

  return (
    <>
      <Breadcrumb />
      <div className={styles.container}>
        <div className={styles.image_area}>
          <ImageProduct picture={productData.picture} />
        </div>
        <div className={styles.info_area}>
          <ProductInfo product={productData} />
        </div>
        <div className={styles.description_area}>
          <ProductDescription description={productData.description} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailLayout;
