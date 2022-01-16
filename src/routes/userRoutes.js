import UserController from "../controller/userController";
import Validator from "../middleware/validator";
import express from "express";
const userRouter = express.Router();

userRouter.post("/register",Validator.newAccountRules(),Validator.validateInput, UserController.createUser);
userRouter.get("/getusers", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUsers);
userRouter.delete("/:id", UserController.deletOneUser);


export default userRouter;
