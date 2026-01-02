import express from 'express';
import userRouter from './router/userRouter.js';
import mongoose from 'mongoose';
import url from './config/connection.js';
mongoose.connect(url);
var app = express();
app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/login",(request,response)=>{
    response.render("login.ejs");
});
app.get("/registration",(request,response)=>{
    response.render("registration.ejs");
});

app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Connection established successfully");
});