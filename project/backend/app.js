import express from 'express';
import dotenv from 'dotenv';
import expressSession from 'express-session';
import cookieParser from 'cookie-parser';
import mongoose from 'mongoose';
import url from './connection/dbConfig.js';
import tpoRouter from './router/tpoRouter.js';
import adminRouter from './router/adminRouter.js';
import studentRouter from './router/studentRouter.js';

mongoose.connect(url);
dotenv.config();
var app = express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(expressSession({SECRET : process.env.SECRET,resave:true,saveUninitialized:true}));
app.use(cookieParser());

app.use('/tpo',tpoRouter);
app.use('/admin',adminRouter);
app.use('/student',studentRouter);

app.listen(process.env.PORT,()=>{
    console.log("Connection established successfully");
});