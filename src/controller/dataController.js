import dataInfos from "../models/atenantpay";
import houseInfos from "../models/landlordInfo";
class dataController{

    static async createInfos(req,res){
        const house= await houseInfos.create(req.body); // return generated data
        if(!house){
            return res.status(404).json({error:"houseinformation not registered"})
        }
        return res
        .status(200)
        .json({message:"houseinformation created successfully" , data: house});
    }
    
    static async getAllhouseInfos(req,res){
        const houses= await houseInfos.find(); // return generated data
        if(!houses){
            return res.status(404).json({error:"no houseinformation registered"})
        }
        return res
        .status(200)
        .json({message:"Successfully retrieved houseinformation" , data: houses});
    }

    static async getOnehouseInfos(req,res){
        const house=await dataInfos.findById(req.params.id);
        if(!house){
            return res.status(404).json({error:"houseInfos not found"})
        }
        return res.status(200).json({message:"houseinformation found successfully", data: house})
    }

    static async deleteOnehouseInfos(req,res){
        const house=await houseInfos.findByIdAndDelete(req.params.id);
        if(!house){
            return res.status(404).json({error:"houseinformation not deleted"})
        }
        return res.status(200).json({message:"houseinformation deleted successfully", data: house})
    }
    

    static async createMate(req,res){
       
        const mate= await dataInfos.create(req.body); // return generated data
        if(!mate){
            return res.status(404).json({error:"mate not registered"})
        }
        return res
        .status(200)
        .json({message:"mate created successfully" , data: mate});
    }
    
    static async getAllMates(req,res){
        const mates= await dataInfos.find(); // return generated data
        if(!mates){
            return res.status(404).json({error:"no mates registered"})
        }
        return res
        .status(200)
        .json({message:"Successfully retrieved mates" , data: mates});
    }

    static async getOneMate(req,res){
        const mate=await dataInfos.findById(req.params.id);
        if(!mate){
            return res.status(404).json({error:"mate not found"})
        }
        return res.status(200).json({message:"mate found successfully",data:mate})
    }

    static async deleteOneMate(req,res){
        const mate=await dataInfos.findByIdAndDelete(req.params.id);
        if(!mate){
            return res.status(404).json({error:"mate not deleted"})
        }
        return res.status(200).json({message:"mate deleted successfully",data:mate})
    }
}
export default dataController;