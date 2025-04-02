import { useSearchParams } from "react-router-dom";
import ListProductsLayout from "../components/ProductList/ProductList";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";
import useQuery from "@/modules/common/hooks/useQuery";
import { ProductsResponse } from "../models/models";
import { API_URLS } from "@/modules/common/urls";
import Loading from "@/modules/common/components/Loading/Loading";
import NotFound from "@/modules/common/components/NotFound/NotFound";
import NoResults from "@/modules/common/components/NotResults/NotResults";

const ProductListPage = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search")!;

  const { data, loading, error } = useQuery<ProductsResponse>(
    API_URLS.GET_PRODUCTS(search)
  );

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  if (!data?.items.length) return <NoResults />;

  return (
    <>
      <Breadcrumb categories={data?.categories} />
      <ListProductsLayout products={data?.items} />
    </>
  );
};

export default ProductListPage;
