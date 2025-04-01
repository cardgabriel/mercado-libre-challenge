import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import axios from "axios";
import { ML_API_URLS } from "./config/urls";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/todos", (req, res) => {
  setTimeout(() => {
    res.json([
      { id: 1, title: "Tarea de ejemplo 1", completed: false },
      { id: 2, title: "Tarea de ejemplo 2", completed: true },
      { id: 23, title: "Tarea de ejemplo 22", completed: true },
    ]);
  }, 2000); 
});

app.get("/api/items", async (req, res) => {
  try {
    const { q } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: "El parámetro 'q' es requerido" });
    }

    const response = await axios.get(`${ML_API_URLS.SEARCH}?q=${q}`, {
      headers: {
        'User-Agent': req.headers['user-agent'] || 'Mozilla/5.0'
      }
    });
    const { results, filters } = response.data;

    // Obtener categorías del primer resultado
    let categories = [];
    if (results.length > 0) {
      const firstItem = results[0];
      if (firstItem.category_id) {
        try {
          const categoryResponse = await axios.get(`${ML_API_URLS.CATEGORIES}/${firstItem.category_id}`);
          const categoryData = categoryResponse.data;
          categories = categoryData.path_from_root.map((category: any) => category.name);
        } catch (error) {
          console.error("Error al obtener categorías del item:", error);
        }
      }
    }

    // Transformar los resultados al formato requerido
    const items = results.slice(0, 6).map((item: any) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.price.currency_id,
        amount: item.price.amount,
        decimals: 2
      },
      picture: item.pictures?.stack?.normal || item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping?.free_shipping || false
    }));

    const responseData = {
      author: {
        name: "Gabriel",
        lastname: "Cardozo"
      },
      categories,
      items
    };

    res.json(responseData);
  } catch (error) {
    console.error("Error al consultar la API de Mercado Libre:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(PORT, () => {
  console.log(`> Server running on port ${PORT}`);
});
