"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BloodGroupDetails_1 = __importDefault(require("../models/BloodGroupDetails"));
const postBloodGroupDetails = (req, res) => {
    const bloodGpDetails = new BloodGroupDetails_1.default(req.body);
    bloodGpDetails.save();
    res.send(201).json({ message: "Created Successfully!" });
};
exports.default = postBloodGroupDetails;
