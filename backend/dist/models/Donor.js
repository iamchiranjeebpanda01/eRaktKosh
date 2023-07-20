"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const donorSchema = new Schema({
    username: String,
    password: String,
    name: String,
    gender: String,
    age: Number,
    email: String,
    mobileNo: String,
    aadharNo: String,
    district: { type: Schema.Types.ObjectId, ref: "District" },
    state: { type: Schema.Types.ObjectId, ref: "State" }
});
const Donor = mongoose_1.default.model("Donor", donorSchema);
exports.default = Donor;
