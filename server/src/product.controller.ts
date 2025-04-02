import { Request, Response } from "express";
import { MercadoLibreService } from "./mercadoLibre.service";

export class ProductController {
  private mercadoLibreService: MercadoLibreService;

  constructor() {
    this.mercadoLibreService = new MercadoLibreService();
  }

  async searchProducts(req: Request, res: Response): Promise<void> {
    try {
      const { q } = req.query;
      const userAgent = req.headers["user-agent"];

      if (!q) {
        res.status(400).json({ error: "El parámetro 'q' es requerido" });
        return;
      }

      const response = await this.mercadoLibreService.searchProducts(
        q as string,
        userAgent as string
      );
      res.json(response);
    } catch (error) {
      console.error("Error al procesar la búsqueda:", error);
      res.status(500).json({ error: "Error interno del servidor" });
    }
  }

  async getProductDetail(req: Request, res: Response): Promise<void> {
    try {
      const { id } = req.params;
      const { q } = req.query;
      const userAgent = req.headers["user-agent"];

      if (!q) {
        res.status(400).json({ error: "El parámetro 'q' es requerido" });
        return;
      }

      const productDetail = await this.mercadoLibreService.getProductDetail(
        id,
        userAgent as string,
        q as string
      );
      res.json(productDetail);
    } catch (error) {
      res
        .status(500)
        .json({ error: "Error al obtener el detalle del producto" });
    }
  }
}
