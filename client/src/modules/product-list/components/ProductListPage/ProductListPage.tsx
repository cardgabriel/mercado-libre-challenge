import styles from "./ProductListPage.module.scss";
import ProductItem from "../ProductItem/ProductItem";
import { Product, ProductsResponse } from "../../models/models";
import Breadcrumb from "@/common/components/Breadcrumb/Breadcrumb";
import Loading from "@/common/components/Loading/Loading";
import NotFound from "@/common/components/NotFound/NotFound";
import NotResults from "@/common/components/NotResults/NotResults";
import useFetch from "@/common/hooks/useFetch";
import { useSearchParams } from "react-router-dom";
import { API_URLS } from "@/common/urls";
import SEO from "@/common/components/SEO/SEO";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")!;

  const { data, loading, error } = useFetch<ProductsResponse>(
    API_URLS.GET_PRODUCTS(search)
  );

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  if (!data?.items.length) return <NotResults />;

  return (
    <>
      <SEO
        title={`Resultados para ${search}`}
        description={`Encuentra los mejores productos de ${search} en Mercado Libre`}
        keywords={`${search}, productos, mercado libre, compras online`}
        canonical={`${window.location.origin}/items?search=${search}`}
      />
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
