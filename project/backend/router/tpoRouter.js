import express from 'express';
import { tpoLoginController, tpoRegisterController } from '../controller/tpoController.js';
var tpoRouter = express.Router();

tpoRouter.post("/register",tpoRegisterController);
tpoRouter.post("/login",tpoLoginController);

export default tpoRouter;