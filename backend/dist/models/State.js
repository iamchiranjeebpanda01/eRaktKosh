"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const District_1 = require("./District");
const Schema = mongoose_1.default.Schema;
const stateSchema = new Schema({
    name: { type: String, required: true },
    districts: [District_1.districtSchema]
});
const State = mongoose_1.default.model("State", stateSchema);
State.collection.createIndex({ "districts.name": 1 });
exports.default = State;
