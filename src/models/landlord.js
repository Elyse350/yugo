import mongoose from 'mongoose';
const dataSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
    {
        HouseNumber:{
            type:Number,
            required:true
        },
        turnateName:{
            type:String,
            required:true
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
    
    },
       {
           timestamps: true,  // means igihe byabereye stored
       }
);
dataSchema.pre(/^find/,function(next){
    this.populate({path:"user",
select: "lastName email address"
    });
    next();
})

const data = mongoose.model('data',dataSchema);

export default data;