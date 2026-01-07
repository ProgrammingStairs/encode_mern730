import express from 'express';
import { saveController,verifyEmailController } from '../controller/userController.js';

var userRouter = express.Router();

userRouter.post("/addUser",saveController);
userRouter.post("/verifyEmail",verifyEmailController);

export default userRouter;