import express from 'express';
import { tpoLoginController, tpoRegisterController,verifyEmailController } from '../controller/tpoController.js';
var tpoRouter = express.Router();

tpoRouter.post("/register",tpoRegisterController);
tpoRouter.post("/verifyEmail",verifyEmailController);

tpoRouter.post("/login",tpoLoginController);

export default tpoRouter;