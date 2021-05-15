import express from "express";
import bodyParse from "body-parser";
import mongoose from "mongoose";
import userRouting from "./router/user.js";

const dbURL = 'mongodb+srv://user:user1@cluster0.z8r9s.mongodb.net/ExpressApp?retryWrites=true&w=majority';
mongoose.connect(dbURL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then((result) =>{
    console.log("connected to database");

    app.listen(8000,()=>{
        console.log("sever Started");
    })
}).catch((err)=>
{
    console.log(err);
})


const app = express();
app.use(bodyParse.json());

app.get("/",(req,res)=>{
    res.send("HOMEPAGEDA");
})

app.use("/user",userRouting);

