"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloodGroupSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.bloodGroupSchema = new Schema({
    name: String,
    details: { type: Schema.Types.ObjectId, ref: "Blood Group Details" },
    quantity: Number
});
const BloodGroup = mongoose_1.default.model("Blood Group", exports.bloodGroupSchema);
exports.default = BloodGroup;
