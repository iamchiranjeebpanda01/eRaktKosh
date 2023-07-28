import express from "express";
import postState from "../controllers/StateController";
import login, { signUp } from "../controllers/UserAuthController";
const adminRouter = express.Router();


adminRouter.post("/login", login);
adminRouter.post("/signUp", signUp);
adminRouter.post("/addState", postState);

export default adminRouter;

