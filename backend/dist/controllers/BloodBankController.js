"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const BloodBank_1 = __importDefault(require("../models/BloodBank"));
const postUpdatedBloodGroupStock = (req, res) => {
    BloodBank_1.default.findOne({ _id: req.body._id })
        .then((bloodBank) => {
        bloodBank === null || bloodBank === void 0 ? void 0 : bloodBank.BloodGroups;
    });
};
