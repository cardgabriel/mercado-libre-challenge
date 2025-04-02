import { Request, Response } from "express";
import { MercadoLibreService } from "../services/mercadoLibre.service";

export class ItemController {
  private mercadoLibreService: MercadoLibreService;

  constructor() {
    this.mercadoLibreService = new MercadoLibreService();
  }

  async searchItems(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      const userAgent = req.headers["user-agent"];

      if (!q) {
        res.status(400).json({ error: "El parámetro 'q' es requerido" });
        return;
      }

      const response = await this.mercadoLibreService.searchItems(
        q as string,
        userAgent || "Mozilla/5.0"
      );
      res.json(response);
    } catch (error) {
      console.error("Error al procesar la búsqueda:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }
}
