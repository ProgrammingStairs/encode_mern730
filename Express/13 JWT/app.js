import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from './router/userRouter.js';
import mongoose from 'mongoose';
import { url } from './connection/dbConfig.js';
mongoose.connect(url);
dotenv.config();
var app = express();
app.use(cookieParser());
app.set("views","views");
app.set("view engine","ejs");

app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.use("/user",userRouter);

app.listen(process.env.PORT,(request,response)=>{
    console.log("Connection established successfully");
});