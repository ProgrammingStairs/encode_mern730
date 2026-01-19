import express from 'express';
import { saveController,verifyEmailController,loginController,uploadFormDataController,viewImagesController } from '../controller/userController.js';
import multer from 'multer';
var userRouter = express.Router();

const storage = multer.diskStorage({
    destination:'./public/images/',
    filename:(request,fileObj,callback)=>{
        callback(null,new Date().getTime()+fileObj.originalname);
    }    
});
const uploads = multer({storage:storage});

userRouter.post("/addUser",saveController);
userRouter.post("/verifyEmail",verifyEmailController);
userRouter.post("/login",loginController);
userRouter.get("/profile",(request,response)=>{
    response.render("profile.ejs",{email:request.session.email});
});
userRouter.get("/uploadImage",(request,response)=>{
    response.render("uploadImageForm.ejs",{email:request.session.email,message:""});
});

userRouter.post("/uploadFormData",uploads.fields([{name:'profile',maxCount:100},{name:'profileOne',maxCount:100}]),uploadFormDataController);
userRouter.get("/viewImages",viewImagesController);

export default userRouter;