import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import adminRouter from './router/adminRouter.js';
import userRouter from './router/userRouter.js';

dotenv.config();
var app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get("/",(request,response)=>{
   response.sendFile(__dirname+"/index.html");
});

app.use("/admin",adminRouter);
app.use("/user",userRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});
