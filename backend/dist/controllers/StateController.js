"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const State_1 = __importDefault(require("../models/State"));
const postState = (req, res) => {
    const newState = new State_1.default({ name: req.body.name });
    newState.save();
    res.statusCode(201).json({ message: "Created Successfully" });
};
exports.default = postState;
