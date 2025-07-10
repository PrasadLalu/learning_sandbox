import { Router } from "express";
import UserController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/list", UserController.findAll.bind(UserController));
userRouter.post("/create", UserController.create.bind(UserController));
userRouter.delete('/delete/:id', UserController.deleteOne.bind(UserController));

export default userRouter;
