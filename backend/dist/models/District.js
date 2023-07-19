"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.districtSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BloodBank_1 = require("./BloodBank");
const Schema = mongoose_1.default.Schema;
exports.districtSchema = new Schema({
    name: { type: String, required: true },
    bloodbanks: [BloodBank_1.bloodBankSchema],
    donors: [{ type: Schema.Types.ObjectId, ref: "Blood Bank" }]
});
const District = mongoose_1.default.model("District", exports.districtSchema);
exports.default = District;
