import express from 'express';
import { studentLoginController, studentRegisterController } from '../controller/studentController.js';

var studentRouter = express.Router();

studentRouter.post("/register",studentRegisterController);
studentRouter.post("/login",studentLoginController);


export default studentRouter;