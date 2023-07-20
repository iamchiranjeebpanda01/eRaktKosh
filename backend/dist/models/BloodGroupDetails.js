"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bloodGroupDetailsSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
exports.bloodGroupDetailsSchema = new Schema({
    name: String,
    donors: [],
    receivers: []
});
const BloodGroupDetails = mongoose_1.default.model("Blood Group Details", exports.bloodGroupDetailsSchema);
exports.default = BloodGroupDetails;
