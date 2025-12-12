import express from 'express';
import { addStudentController,loginStudentController,deActivateStudentController,updateStudentDetailsController } from '../controller/studentController.js';
var studentRouter = express.Router();

studentRouter.get("/addStudent",(request,response)=>{
    response.render("addStudent.ejs",{message:""});
});
studentRouter.get("/loginStudent",(request,response)=>{
    response.render("loginStudent.ejs",{message:""});
});
studentRouter.get("/home",(request,response)=>{
    response.render("studentProfile.ejs",{message:"",email:request.session.email});
});
studentRouter.get("/updateStudent",(request,response)=>{
    response.render("updateStudent.ejs",{message:""});
});

studentRouter.post("/addStudent",addStudentController);
studentRouter.post("/loginStudent",loginStudentController);
studentRouter.get("/deActivateStudent/:email",deActivateStudentController);
studentRouter.get("/updateStudentDetails/:email",updateStudentDetailsController);

export default studentRouter;