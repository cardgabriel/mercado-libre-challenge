import { useEffect } from "react";
import axios from "axios";
import ItemDetailLayout from "../components/Layout/ItemDetailLayout";

const ItemDetail = () => {
  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/todos`);
        console.log("Respuesta de la API:", response.data);
      } catch (err) {
        console.error("Error al obtener los datos:", err);
      }
    };

    fetchTodo();
  }, []);

  return <ItemDetailLayout />;
};

export default ItemDetail;
