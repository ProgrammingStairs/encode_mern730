import express from 'express';
import userRouter from './router/userRouter.js';
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use("/user",userRouter);

app.listen(3000,()=>{
    console.log("Connection established successfully");
});