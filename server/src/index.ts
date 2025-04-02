import express from "express";
import cors from "cors";
import { ItemController } from './controllers/item.controller';

const app = express();
const itemController = new ItemController();

app.use(cors());
app.use(express.json());

app.get("/api/items", (req, res) => itemController.searchItems(req, res));

app.listen(3000, () => {
  console.log(`Servidor corriendo en el puerto 3000}`);
});
