"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.comparePasswordHash = exports.createPasswordHash = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const saltRounds = 10; //* Minimum Recommended salt value
const createPasswordHash = (password) => {
    return bcryptjs_1.default.hashSync(password, saltRounds);
};
exports.createPasswordHash = createPasswordHash;
const comparePasswordHash = (password, passwordHash) => {
    return bcryptjs_1.default.compareSync(password, passwordHash);
};
exports.comparePasswordHash = comparePasswordHash;
