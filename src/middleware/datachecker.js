import { check } from "express-validator"
import user from "../models/user"
import userInfos from "../models/user"





class dataChecker{

    // check if user email exist

    static async isEmailExist(req,res,next){
      

        const user= await userInfos.findOne({email: req.body.email})
        if(!user) {
            return next();
        }
         return res.status(401).json({error:"email arleady exist"})
    }
  
}
export default dataChecker