import UserInfos from "../models/user";
import bcrypt from "bcrypt";
import TokenAuth from "../helper/tokenAuth";
import LandlordInfos from"../models/landlordInfo";
import AtenantpayInfos from "../models/atenantpay";
class UserController{
    //create user in db
    static async createUser(req,res){
        const hashPassword=bcrypt.hashSync(req.body.password,10)
        req.body.password=hashPassword;
        const user =await UserInfos.create(req.body)
        if(!user){
            return res.status(404).json({error:"user not registered"})
        }
        return res
        .status(200)
        .json({message:"User created successfully" , data: user});
    }
    static async getAllUsers(req,res){
        const users =await UserInfos.find()
        if(!users){
            return res.status(404).json({error:"users not found"})
        }
        return res
        .status(200)
        .json({message:"Users found successfully" , data: users});
    }
    static async getOneUsers(req,res){
        const user =await UserInfos.findById(req.params.id)
        if(!user){
            return res.status(404).json({error:"user not found"})
        }
        return res
        .status(200)
        .json({message:"User found successfully" , data: user});
    }
    static async deletOneUser(req,res){
        const user =await UserInfos.findById(req.params.id)
        if(!user){
            return res.status(404).json({error:"user not deleted"})
        }
        return res
        .status(200)
        .json({message:"User deleted successfully" , data: user});
    }

    //Login function
    static async userLogin(req,res){
        const user =await UserInfos.findOne({email:req.body.email});
        console.log(user)
        if (!user){
            return res
            .status(404)
            .json({error:"user not found ! kindly register"});
        }
        if (bcrypt.compareSync(req.body.password, user.password)){
         user.password=null;
     const token = TokenAuth.tokenGenerator({user:user})
        return res.status(200).json({message:"successfully logged in", token:token});
        }
    return res.status(400).json({error:"Password is wrong"});


}
// tenant pay  a house function
static async tenantpay (req,res){
    const tenantData={
        user:req.user._id,
        house:req.params.id
    };
    const tenant=await  AtenantpayInfos.create(tenantData);
    const house =await  LandlordInfos.findById(req.params.id);
    
    
    console.log(house);
    const Nofhouse=house.numberofhouse -1;
    await LandlordInfos.findByIdAndUpdate(req.params.id,{numberofhouse:Nofhouse});
    if(!tenant){
        return res.status (400).json({error:"failed  to pay the gabbage disposal"});
    }
    return res.status(200).json({message:"payed sussefull the gabbage  disposal",data:tenant});

}
// get all the payed tenant
static async getAlltenantPayed(req,res){
    const tenantPayed =await AtenantpayInfos.find();
    if(!tenantPayed){
        return res.status(400).json({error:"No payment from the tenant"});

    }
    return res.status(400).json({message:"retrieved all the tenant payment successfully",data:tenantPayed});
}
// getALLtenantby tenantid
static async getAlltenantPayedByTenantId(req,res){
    const tenantPayed=await AtenantpayInfos.find({house:req.params.id});
    if(!tenantPayed){

        return res.status(400).json({error:"No payment from the tenant"})
    }
    return res.status(200).json({message:"retrieved all the tenant paymnt successfully",data:tenantPayed});
    }
//getall tenant by userid
    static async getAlltenantPayedByUserId(req,res){
        const tenantPayed=await AtenantpayInfos.find({user:req.params.id});
        if(!tenantPayed){
            return res.status(400).json({error:"No payment from the tenant"})
        }
        return res.status(200).json({message:"retrieved all the tenant paymnt successfull",data:tenantPayed})
        }

    //Accept or decline/cancel
    static async changeTenantPayment(req,res){
        
        const{id,payment} = req.body                       
        const tenant = await AtenantpayInfos. findByIdAndUpdate (id,{payment:payment},{new:true})
        if(!tenant){
            return res.status(404).json({error:"failed to update payment"});
        }
        /*sendSms(
            tenant.user.lastName,
            tenant.house.landLordName,
            tenant.payement,
            tenant._id,
            tenant.user.phone);*/
        
        return res.status(200).json({message:"success",data:tenant});

      
}


}
export default UserController;