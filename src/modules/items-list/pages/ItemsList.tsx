import { useSearchParams } from "react-router-dom";

const ItemsList = () => {
  const [searchParams] = useSearchParams();
  const search = searchParams.get("search");

  return (
    <div>
      <h2>Resultados de búsqueda</h2>
      {search && <p>Buscando: {search}</p>}
    </div>
  );
};

export default ItemsList; 