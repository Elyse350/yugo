import express from "express"; 
import Validator from "../middleware/validator";
import dataController from "../controller/dataController"
const dataRouter = express.Router();

dataRouter.post("/house", dataController.createInfos);
dataRouter.get("/getallhouse", dataController.getAllhouseInfos);


dataRouter.post("/mate",Validator.newAcccountTenantRules(),Validator.validateInput, dataController.createMate);
dataRouter.get("/getmate", dataController.getAllMates);
dataRouter.get("/:id", dataController.getOneMate);
dataRouter.delete("/:id", dataController.deleteOneMate);
dataRouter.get("/:id", dataController.getOnehouseInfos);
dataRouter.delete("/:id", dataController.deleteOnehouseInfos);


export default dataRouter;
