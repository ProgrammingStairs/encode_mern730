import express from 'express';
import { addUserController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    response.render("index.ejs");
});
userRouter.get("/login",(request,response)=>{
    response.render("login.ejs");
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs");
});

userRouter.post("/addUser",addUserController);

export default userRouter;