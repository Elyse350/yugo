import mongoose from "mongoose";
const paySchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:"User"
    },
    house:{
        type:mongoose.Schema.ObjectId,
        ref:"House"

    },
    lastPaidDate:{
         type:Date, 
     },
    dueDatePayment:{
        type:Date,
    },
    payment:{
        type:String,
        enum:["pending","paid","not payed","cancel"],
        default:"pending"
    }
},
{
    timestamps:true,
}

);
paySchema.pre(/^find/,function(next){
    this.populate({
        path:"user",
        select:"firstName lastName phone email  address"
    }).populate({
        path:"house",
    });
    next();
});
const pay =mongoose.model("Pay",paySchema)
export default pay;