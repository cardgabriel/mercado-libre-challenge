import { useParams } from "react-router-dom";
import ItemDetailLayout from "../components/Layout/ItemDetailLayout";

const ItemDetail = () => {
  const { id } = useParams();
  console.log(id);

  return <ItemDetailLayout />;
};

export default ItemDetail;
