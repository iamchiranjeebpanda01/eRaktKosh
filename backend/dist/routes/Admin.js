"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const StateController_1 = __importDefault(require("../controllers/StateController"));
const UserAuthController_1 = __importStar(require("../controllers/UserAuthController"));
const DistrictController_1 = __importDefault(require("../controllers/DistrictController"));
const BloodGroupController_1 = __importDefault(require("../controllers/BloodGroupController"));
const BloodGroupDetailsController_1 = __importDefault(require("../controllers/BloodGroupDetailsController"));
const adminRouter = express_1.default.Router();
adminRouter.post("/login", UserAuthController_1.default);
adminRouter.post("/signUp", UserAuthController_1.signUp);
adminRouter.post("/addState", StateController_1.default);
adminRouter.post("/addDistrict", DistrictController_1.default);
adminRouter.post("/addBloodGroup", BloodGroupController_1.default);
adminRouter.post("/addBloodGroupDetails", BloodGroupDetailsController_1.default);
exports.default = adminRouter;
