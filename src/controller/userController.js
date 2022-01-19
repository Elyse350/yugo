import UserInfos from "../models/user";
import user from "../models/user";
import bcrypt from "bcrypt";
import TokenAuth from "../helper/tokenAuth";
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
}
export default UserController;