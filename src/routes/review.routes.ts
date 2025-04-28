import { Router } from "express";
import ReviewController from "../controllers/ReviewController";
import verifyToken from "../middlewares/auth";

const reviewRouter = Router();

reviewRouter.post("/", verifyToken, ReviewController.create);

export default reviewRouter;
