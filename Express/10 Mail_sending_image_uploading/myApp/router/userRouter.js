import express from 'express';
import { saveController,verifyEmailController,loginController } from '../controller/userController.js';

var userRouter = express.Router();

userRouter.post("/addUser",saveController);
userRouter.post("/verifyEmail",verifyEmailController);
userRouter.post("/login",loginController);

export default userRouter;