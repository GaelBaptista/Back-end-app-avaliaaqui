import { Router } from "express";
import ProductController from "../controllers/ProductController.ts";
import verifyToken from "../middlewares/auth";

const productRouter = Router();

productRouter.post("/", verifyToken, ProductController.create);
productRouter.get("/", ProductController.list);

export default productRouter;
