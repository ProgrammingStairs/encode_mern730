import express from 'express';
import { saveController,verifyEmailController,loginController,uploadFormDataController,viewImagesController } from '../controller/userController.js';

var userRouter = express.Router();

userRouter.post("/addUser",saveController);
userRouter.post("/verifyEmail",verifyEmailController);
userRouter.post("/login",loginController);
userRouter.get("/profile",(request,response)=>{
    response.render("profile.ejs",{email:request.session.email});
});
userRouter.get("/uploadImage",(request,response)=>{
    response.render("uploadImageForm.ejs",{email:request.session.email,message:""});
});
userRouter.post("/uploadFormData",uploadFormDataController);
userRouter.get("/viewImages",viewImagesController);

export default userRouter;