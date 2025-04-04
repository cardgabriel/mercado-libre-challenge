import express from "express";
import cors from "cors";
import { ProductController } from "./product.controller";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const productController = new ProductController();

app.get("/api/items", (req, res) => productController.searchProducts(req, res));
app.get("/api/items/:id", (req, res) =>
  productController.getProductDetail(req, res)
);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
