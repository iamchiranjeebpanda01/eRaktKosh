"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloodBankSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BloodGroup_1 = require("./BloodGroup");
const Schema = mongoose_1.default.Schema;
exports.bloodBankSchema = new Schema({
    username: String,
    password: String,
    name: { type: String, required: true },
    parent_hospital: String,
    category: String,
    lastUpdated: Date,
    BloodGroups: [BloodGroup_1.bloodGroupSchema],
    district: { type: Schema.Types.ObjectId, ref: "District" },
    state: { type: Schema.Types.ObjectId, ref: "State" }
});
const BloodBank = mongoose_1.default.model("Blood Bank", exports.bloodBankSchema);
exports.default = BloodBank;
