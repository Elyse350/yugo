import express from "express";
import UserController from "../controller/userController";
import DataChecker from "../middleware/datachecker";
import Validator from "../middleware/validator";

const userRouter = express.Router();



userRouter.post("/register",Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist, UserController.createUser)
userRouter.get("/getusers", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUsers);
userRouter.delete("/:id", UserController.deletOneUser);

userRouter.post('/login',UserController.userLogin);
export default userRouter;
