import express from 'express';
import studentRouter from './router/studentRouter.js';
import expressSession from 'express-session';
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({secret:"qwert123456",resave:true,saveUninitialized:true}));
app.use("/student",studentRouter);
app.get("/",(request,response)=>{
    response.render("index.ejs");
});

app.listen(3000,()=>{
    console.log("Connection established successfully");
});