import { useSearchParams } from "react-router-dom";
import ListProductsLayout from "../components/ProductList/ProductList";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";
import useQuery from "@/modules/common/hooks/useQuery";
import { ItemsResponse } from "../models/models";
import { API_URLS } from "@/modules/common/config/api";

const ItemsList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  const { data } = useQuery<ItemsResponse>(
    search ? API_URLS.GET_PRODUCTS(search) : ""
  );

  console.log("Resultados de búsqueda:", data);

  return (
    <>
      <Breadcrumb />
      <ListProductsLayout />
    </>
  );
};

export default ItemsList;
