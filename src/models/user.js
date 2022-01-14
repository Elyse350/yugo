import mongoose from "mongoose";
const userSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
     {
       firstName:String,
       lastName:String,
       email: {
           type:String,
           required:true,
           unique:true,
       },
       phone:String,
       password:{
           type:String,
           required:true,
       },
       address:{
           type:String,
           default:"Rwanda"
        },
       gender:{
           type:String,
           enum:["male","female","other","not-say"],  //enum list data to be registered inside these data no other data will be rejected
       }, 
     
    // role:{
    //     type:String,
    //     enum:["admin","user"],
    //     default:"user"
    //    }
    },
       {
           timestamps: true,  // means igihe byabereye stored
       }
)
const user = mongoose.model('User',userSchema)
export default user;