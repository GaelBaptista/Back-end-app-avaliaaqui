import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Review } from "../entities/Review";
import AppError from "../utils/AppError";

class ReviewController {
  async create(req: Request, res: Response) {
    const { productId, name, email, feedback, experience, recommend } =
      req.body;

    if (
      !productId ||
      !name ||
      !email ||
      !feedback ||
      !experience ||
      recommend === undefined
    ) {
      throw new AppError("Todos os campos são obrigatórios", 400);
    }

    const reviewRepository = AppDataSource.getRepository(Review);

    const review = reviewRepository.create({
      productId,
      name,
      email,
      feedback,
      experience,
      recommend,
    });

    await reviewRepository.save(review);

    return res.status(201).json(review);
  }
}

export default new ReviewController();
