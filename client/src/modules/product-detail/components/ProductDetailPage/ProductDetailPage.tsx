import ProductInfo from "../ProductInfo/ProductInfo";
import ImageProduct from "../ImageProduct/ImageProduct";
import ProductDescription from "../ProductDescription/ProductDescription";
import styles from "./ProductDetailPage.module.scss";
import Breadcrumb from "@/common/components/Breadcrumb/Breadcrumb";
import { useParams, useSearchParams } from "react-router-dom";
import useFetch from "@/common/hooks/useFetch";
import { API_URLS } from "@/common/urls";
import NotFound from "@/common/components/NotFound/NotFound";
import Loading from "@/common/components/Loading/Loading";
import { ProductDetail } from "../../models/models";
import SEO from "@/common/components/SEO/SEO";

const ProductDetailLayout = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search") || "";

  const {
    data: productData,
    loading,
    error,
  } = useFetch<ProductDetail>(API_URLS.GET_PRODUCT_DETAIL(id!), { q: search });

  if (loading) return <Loading />;
  if (error || !productData) return <NotFound />;

  const productTitle = productData.item?.title;
  const productDescription = productData.item?.description || "";
  const productImage = productData.item?.picture;

  return (
    <>
      <SEO
        title={productTitle}
        description={productDescription.slice(0, 160)}
        keywords={`${productTitle}, ${productData.categories.join(
          ", "
        )}, mercado libre`}
        canonical={`${window.location.origin}/items/${id}`}
        ogTitle={productTitle}
        ogDescription={productDescription.slice(0, 160)}
        ogImage={productImage}
      />
      <Breadcrumb categories={productData.categories} />
      <div className={styles.container}>
        <div className={styles.image_area}>
          <ImageProduct picture={productData.item?.picture} />
        </div>
        <div className={styles.info_area}>
          <ProductInfo product={productData.item} />
        </div>
        <div className={styles.description_area}>
          <ProductDescription description={productData.item?.description} />
        </div>
      </div>
    </>
  );
};

export default ProductDetailLayout;
