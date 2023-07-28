import express from "express";
import login, { signUp } from "../controllers/UserAuthController";
const userRouter = express.Router();

userRouter.post("/user/login", login);
userRouter.post("/user/signUp", signUp);

export default userRouter;