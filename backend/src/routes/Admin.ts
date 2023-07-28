import express from "express";
import postState from "../controllers/StateController";
import login, { signUp } from "../controllers/UserAuthController";
import postDistrict from "../controllers/DistrictController";
import postBloodGroup from "../controllers/BloodGroupController";
import postBloodGroupDetails from "../controllers/BloodGroupDetailsController";
const adminRouter = express.Router();


adminRouter.post("/login", login);
adminRouter.post("/signUp", signUp);
adminRouter.post("/addState", postState);
adminRouter.post("/addDistrict", postDistrict);
adminRouter.post("/addBloodGroup", postBloodGroup);
adminRouter.post("/addBloodGroupDetails", postBloodGroupDetails);

export default adminRouter;

