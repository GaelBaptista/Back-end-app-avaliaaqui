import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Product } from "../entities/Product";
import AppError from "../utils/AppError";

class ProductController {
  async create(req: Request, res: Response) {
    const { name, category, brand, description, price, image } = req.body;

    if (!name || !category || !brand || !description || !price || !image) {
      throw new AppError("Todos os campos são obrigatórios", 400);
    }

    const productRepository = AppDataSource.getRepository(Product);

    const product = productRepository.create({
      name,
      category,
      brand,
      description,
      price,
      image,
    });

    await productRepository.save(product);

    return res.status(201).json(product);
  }

  async list(req: Request, res: Response) {
    const productRepository = AppDataSource.getRepository(Product);

    const products = await productRepository.find();

    return res.json(products);
  }
}

export default new ProductController();
