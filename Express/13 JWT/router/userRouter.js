import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();
import { loginController, registerController } from '../controller/userController.js';
var userRouter = express.Router();
var USER_SECRET_KEY = process.env.USER_SECRET_KEY;

const authenticateJWT = async(request,response,next)=>{
    try{
        const token = request.cookies.user_token;
        if(!token){
            response.render("login.ejs",{message:"Token not found"});
        }
        else{
            jwt.verify(token,USER_SECRET_KEY,(error,payload)=>{
                if(error){
                response.render("login.ejs",{message:"Error while verifying token"});        
                }else{
                    request.payload = payload;
                    next();
                }
            });
        }
    }catch(error){
        console.log("Error : ",error);
        response.render("login.ejs",{message:"Something Went Wrong"});
    }
}
const authorizeJWT = async(request,response,next)=>{
    try{
        if(request.payload.role=="User"){
            response.render("profile.ejs",{message:"Welcome user"});    
        }else{
            response.render("anonymous_profile.ejs",{message:"Welcome anonymous user"});        
        }
        next();
    }catch(error){
       console.log("Error : ",error);
        response.render("login.ejs",{message:"Something Went Wrong"});
    }
}

userRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs",{message:""});
});
userRouter.post("/login",loginController);
userRouter.post("/register",registerController);
userRouter.get("/profile",authenticateJWT,authorizeJWT,(request,response)=>{
    console.log("Task Completed");
});

export default userRouter;