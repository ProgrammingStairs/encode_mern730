import express from 'express';
import { addUserController,userLoginController,addToDoController,viewToDoController,deleteToDoController } from '../controller/userController.js';
var userRouter = express.Router();

userRouter.get("/",(request,response)=>{
    response.render("index.ejs");
});
userRouter.get("/login",(request,response)=>{
    response.render("login.ejs",{message:""});
});
userRouter.get("/register",(request,response)=>{
    response.render("register.ejs",{message:""});
});
userRouter.get("/home",(request,response)=>{
    response.render("profile.ejs",{message:"",email:request.session.email});
});
userRouter.get("/addToDo",(request,response)=>{
    response.render("addToDo.ejs",{message:"",email:request.session.email});
});

userRouter.post("/addUser",addUserController);
userRouter.post("/login",userLoginController);
userRouter.post("/addToDo",addToDoController);
userRouter.get("/viewToDo",viewToDoController);
userRouter.get("/deleteToDo/:todoid",deleteToDoController);

export default userRouter;