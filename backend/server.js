const express=require("express");
const app=express();
const cors=require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();

const studentRoute=require("./routes/studentRoute");
app.use("/api/v1",studentRoute);

const database=require("./config/database");
database();

app.get("/",(req,res)=>
{
    return res.send("<h1>Hello Students </h1>")
})

app.listen(process.env.PORT,()=>
{
    console.log(`Backend is running on the port ${process.env.PORT}`);
})
