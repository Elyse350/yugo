import express from "express"; 
import Validator from "../middleware/validator";
import dataController from "../controller/dataController"
// import dataChecker from "../middleware/datachecker";
import verifyToken from '../middleware/verifyToken';
import verifyAccess from '../middleware/verifyAccess';

const dataRouter = express.Router();

dataRouter.post("/house", dataController.createInfos);
dataRouter.get("/getallhouse", dataController.getAllhouseInfos);


dataRouter.post("/mate",Validator.newAcccountTenantRules(),Validator.validateInput,verifyToken,
    verifyAccess("admin"), dataController.createInfos);
    
dataRouter.get("/getmate", dataController.getAllMates);


dataRouter.post("/house",Validator.newAcccountTenantRules(),Validator.validateInput, verifyToken, verifyAccess("admin"),dataController.createMate);


dataRouter.get("/:id", dataController.getOneMate);
dataRouter.delete("/:id", dataController.deleteOneMate);
dataRouter.get("/:id", dataController.getOnehouseInfos);
dataRouter.delete("/:id", dataController.deleteOnehouseInfos);



export default dataRouter;
