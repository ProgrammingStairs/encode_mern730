import express from 'express';
import { deleteController, findAllController, findByIdController, saveController, updateController } from '../controller/userController.js';

var userRouter = express.Router();

userRouter.get("/findAll",findAllController);
userRouter.get("/findById/:_id",findByIdController);
userRouter.post("/save",saveController);
userRouter.put("/update/:_id",updateController);
userRouter.delete("/delete/:_id",deleteController);


export default userRouter;