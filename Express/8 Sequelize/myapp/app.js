import express from 'express';
import studentRouter from './router/studentRouter.js';
var app = express();

app.set("views","views");
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(3000,()=>{
    console.log("Connection established successfully");
});