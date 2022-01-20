import mongoose from 'mongoose';
const dataSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
    {
        HouseNumber:{
            type:Number,
        },
        turnateName:{
            type:String , 
        },
        payement:{
            type:String,
            enum:["pending","paid","not paid"],
        default:"pending"

        }
        ,
        user: {
            type:mongoose.Schema.ObjectId,
            ref: "User"
        },
        landlord: {
            type:mongoose.Schema.ObjectId,
            ref: "Landlord"
        },
    
    },
       {
           timestamps: true,  // means igihe byabereye stored
       }
);
dataSchema.pre(/^find/,function(next){
    this.populate({path:"user",
select: "lastName email address"
    }).populate({
        path:"landlord",
    });
    next();
})

const data = mongoose.model('data',dataSchema);

export default data;