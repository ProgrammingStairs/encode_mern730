import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
var adminRouter = express.Router();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// router level middleware
adminRouter.use((request,response,next)=>{
   console.log("This is router level middleware");
    next();
});

adminRouter.get("/",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/adminHome.html");
});

adminRouter.get("/profile",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/adminProfile.html");
});

adminRouter.get("/list",(request,response)=>{
    response.sendFile(__dirname.replace("\\router","")+"/adminViewList.html");
});

export default adminRouter;