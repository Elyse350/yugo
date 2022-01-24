
import mongoose from 'mongoose';
const houseSchema = new mongoose.Schema(  // Scheama is a format or a structure of our model, it will generate our model in db
    {
        landLordName:{
            type:String,
        
        },
        numberofhouse:{
            type:Number,
            
        },
        houseNumber:{
            type:Number,
            

        },
         images:[
         {
             type:String,
         },
     ],
        user: {
            type:mongoose.Schema.ObjectId,
            ref: "User"
        },
       
        
    },
       {
           timestamps: true,  // means igihe byabereye stored
       }
);
houseSchema.pre(/^find/,function(next){
    this.populate({path:"user",
     select:"lastName email address"
 });
    next();
})

const house = mongoose.model('House',houseSchema);

export default house;