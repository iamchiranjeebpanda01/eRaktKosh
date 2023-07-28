"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const adminRouter = express_1.default.Router();
const StateController_1 = __importDefault(require("../controllers/StateController"));
adminRouter.post("/admin/addState", (req, res, next) => {
    (0, StateController_1.default)(req.body.name);
});
