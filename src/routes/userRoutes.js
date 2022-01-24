import express from "express";
import UserController from "../controller/userController";
import DataChecker from "../middleware/datachecker";
import Validator from "../middleware/validator";
import VerifyToken from "../middleware/verifyToken";
import VerifyAccess from "../middleware/verifyAccess";

const userRouter = express.Router();



userRouter.post("/register",Validator.newAccountRules(),Validator.validateInput,DataChecker.isEmailExist, UserController.createUser)
userRouter.get("/getusers", UserController.getAllUsers);
userRouter.get("/:id", UserController.getOneUsers);
userRouter.delete("/:id", UserController.deletOneUser);

userRouter.post('/login',UserController.userLogin);
userRouter.post("/pay/:id",VerifyToken,VerifyAccess("user"),UserController.tenantpay);
userRouter.get('/pays/all',UserController.getAlltenantPayed);
userRouter.get("/pay/:id",VerifyToken,VerifyAccess("admin"),UserController.getAlltenantPayedByTenantId);
userRouter.get("/payed/:id",VerifyToken,VerifyAccess("user"),UserController.getAlltenantPayedByUserId);
userRouter.patch("/tenant/payment",VerifyToken,VerifyAccess("admin"),UserController.changeTenantPayment);

export default userRouter;
