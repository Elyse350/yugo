import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import userRouter from "./src/routes/userRoutes";
import dataRouter from "./src/routes/dataRoutes";
// import datachecker from "./src/middleware/datachecker"
import dotenv from 'dotenv';
dotenv.config();


const app = express();

app.use(bodyParser.json())
app.use("/user",userRouter)
app.use("/data",dataRouter)
app.use("/",(req,res) => res.status(200).json({
    message:"this is api"
}));
const dburl=process.env.DATABASEURL;

mongoose.connect(dburl,{
    
} ).then(()=>console.log("database connected successfully"))
const port=process.env.PORT
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`)
})


export default app;