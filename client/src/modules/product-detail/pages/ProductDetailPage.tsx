import { API_URLS } from "@/modules/common/config/api";
import useQuery from "@/modules/common/hooks/useQuery";
import ProductDetailLayout from "../components/Layout/ProductDetailLayout";
import Loading from "@/modules/common/components/Loading/Loading";
import NotFound from "@/modules/common/components/NotFound/NotFound";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const ProductDetailPage = () => {
  const { data, loading, error } = useQuery<Todo[]>(API_URLS.todos);

  if (loading) return <Loading />;
  if (error) return <NotFound />;
  console.log(data);

  return <ProductDetailLayout />;
};

export default ProductDetailPage;
