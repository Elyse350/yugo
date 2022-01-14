import UserController from "../controller/userController";
import express from "express";
const userRouter = express.Router();

userRouter.post("/register", UserController.createUser);
userRouter.get("/getusers", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUsers);
userRouter.delete("/:id", UserController.deletOneUser);


export default userRouter;
