import { useSearchParams } from "react-router-dom";
import ListProductsLayout from "../components/ProductList/ProductList";
import Breadcrumb from "@/modules/common/components/Breadcrumb/Breadcrumb";

const ItemsList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");
  console.log(search);

  return (
    <>
      <Breadcrumb />
      <ListProductsLayout />
    </>
  );
};

export default ItemsList;
