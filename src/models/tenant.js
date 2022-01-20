import mongoose from 'mongoose';
const houseSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
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
        user: {
            type:mongoose.Schema.ObjectId,
            ref: "User"
        },
        payement:{
            type:String,
            enum:["pending","paid","not paid"],
        default:"pending"

        },
        
    },
       {
           timestamps: true,  // means igihe byabereye stored
       }
);
houseSchema.pre(/^find/,function(next){
    this.populate({path:"user",
     select:"lastname email address"
 });
    next();
})

const house = mongoose.model('ourHouse',houseSchema);

export default house;