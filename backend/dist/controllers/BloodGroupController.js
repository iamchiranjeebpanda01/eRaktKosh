"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BloodGroup_1 = __importDefault(require("../models/BloodGroup"));
const postBloodGroup = (req, res) => {
    const newBloodGp = new BloodGroup_1.default({ name: req.body.name });
    newBloodGp.save();
    res.send(201).json({ message: "Created Successfully!" });
};
exports.default = postBloodGroup;
