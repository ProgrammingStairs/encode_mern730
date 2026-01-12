import express from 'express';
import userRouter from './router/userRouter.js';
import mongoose from 'mongoose';
import url from './config/connection.js';
import expressSession from 'express-session';
import expressFileUpload from 'express-fileupload';
mongoose.connect(url);
var app = express();
app.set("views","views");
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressFileUpload());
app.use(express.static('public'));
app.use(expressSession({secret:'qwerty3456qwert',resave:true,saveUninitialized:true}));
app.get("/",(request,response)=>{
    response.render("index.ejs");
});
app.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
app.get("/registration",(request,response)=>{
    response.render("registration.ejs",{message:""});
});

app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Connection established successfully");
});