"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloodBankSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.bloodBankSchema = new Schema({
    username: String,
    password: String,
    name: { type: String, required: true },
    parent_hospital: String,
    category: String,
    lastUpdated: { type: Date },
    BloodGroups: [{ type: Schema.Types.ObjectId, ref: "Blood Group" }]
});
const BloodBank = mongoose_1.default.model("Blood Bank", exports.bloodBankSchema);
exports.default = BloodBank;
