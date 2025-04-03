import styles from "./ProductListPage.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { Product, ProductsResponse } from "../../models/models";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";
import Loading from "@/modules/common/components/Loading/Loading";
import NotFound from "@/modules/common/components/NotFound/NotFound";
import NoResults from "@/modules/common/components/NotResults/NotResults";
import useFetch from "@/modules/common/hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { API_URLS } from "@/modules/common/urls";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")!;

  const { data, loading, error } = useFetch<ProductsResponse>(
    API_URLS.GET_PRODUCTS(search)
  );

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  if (!data?.items.length) return <NoResults />;

  return (
    <>
      <Breadcrumb categories={data?.categories} />
      <div className={styles.container}>
        {data.items.map((product: Product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default ProductList;
