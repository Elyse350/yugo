import mongoose from 'mongoose';
const houseSchema = new mongoose.Schema(  // Scheam is a format or a structure of our model, it will generate our model in db
    {
        landLordName:{
            type:String,
            required:true
        },
        numberofhouse:{
            type:Number,
            required:true
        },
        houseNumber:{
            type:Number,
            required:true

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

const house = mongoose.model('house',houseSchema);

export default house;