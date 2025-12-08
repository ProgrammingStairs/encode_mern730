import express from 'express';
import expressSession from 'express-session';
import dotenv from 'dotenv';
import userRouter from './router/userRouter.js';
import {createDatabase} from './utils/utility.js';
//import crypto from 'crypto';
dotenv.config();
createDatabase((status)=>{
    if(status){
        console.log("success");
    }else{
        console.log("------> ",status);
    }
});

var app = express();
app.set("views","views");
app.set("view engine","ejs");
// var secret = crypto.randomBytes(32).toString('hex');
// console.log(secret);

app.use((req, res, next) => {
    res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
    next();
  });
  
app.use(expressSession({secret:process.env.SECRET,resave:true,saveUninitialized:true}));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.use("/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});