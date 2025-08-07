import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./router/userRoutes.js";

const app = express();
dotenv.config();

app.use((cors()));
app.use(express.json());
app.use("/client",userRoutes);

const port = process.env.port;




app.listen(port,(req,res)=>{
    console.log(`server runing at port ${port}`);
});

