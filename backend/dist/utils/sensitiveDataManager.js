"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.decryptData = exports.encryptData = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const password = "eRaktKoshSensitiveData";
const encryptData = (data) => {
    return crypto_js_1.default.AES.encrypt(data, password).toString();
};
exports.encryptData = encryptData;
const decryptData = (encryptedData) => {
    return crypto_js_1.default.AES.decrypt(encryptedData, password).toString();
};
exports.decryptData = decryptData;
