import express from 'express';
import { loginController, registerController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs",{message:""});
});
userRouter.post("/login",loginController);
userRouter.post("/register",registerController);

export default userRouter;