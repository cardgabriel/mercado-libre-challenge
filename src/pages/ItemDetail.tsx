import { useParams } from "react-router-dom";

const ItemDetail = () => {
  const { id } = useParams();

  return (
    <div>
      <h2>Detalle del Producto</h2>
      <p>ID del producto: {id}</p>
    </div>
  );
};

export default ItemDetail; 