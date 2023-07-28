"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const District_1 = __importDefault(require("../models/District"));
const postDistrict = (req, res) => {
    const newDistrict = new District_1.default({ name: req.body.name });
    newDistrict.save();
    res.statusCode(201).json({ message: "Created Successfully!" });
};
exports.default = postDistrict;
