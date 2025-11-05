import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
var userRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// router level middleware
userRouter.use((request,response,next)=>{
   console.log("This is router level middleware");
    next();
});

userRouter.get("/",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/userHome.html");
});

userRouter.get("/profile",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/userProfile.html");
});

userRouter.get("/list",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/userViewList.html");
});

export default userRouter;