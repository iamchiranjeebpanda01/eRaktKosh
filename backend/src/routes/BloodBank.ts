import express from "express";
import login, { signUp } from "../controllers/BloodBankAuthController";
const bloodBankRouter = express.Router();

bloodBankRouter.post("/login", login);
bloodBankRouter.post("/signUp", signUp);

export default bloodBankRouter;