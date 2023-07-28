"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const BloodBank_1 = __importDefault(require("../models/BloodBank"));
const passwordManager_1 = require("../utils/passwordManager");
const secretKey = "eRaktKosh-secret-key";
const login = (req, res) => {
    const { username, password } = req.body;
    let loadedBloodBank;
    BloodBank_1.default.findOne({ username: username })
        .then((bloodBank) => {
        if (!bloodBank) {
            const error = new Error("Blood Bank not found!");
            throw error;
        }
        else {
            loadedBloodBank = bloodBank;
            return (0, passwordManager_1.comparePasswordHash)(password, bloodBank.password);
        }
    })
        .then((isEqual) => {
        if (!isEqual) {
            const error = new Error("Invalid Password!");
            throw error;
        }
        const token = jsonwebtoken_1.default.sign({ username: loadedBloodBank.username }, secretKey, { expiresIn: "1h" });
        res.status(200).json({ token: token, userId: loadedBloodBank._id.toString() });
    });
};
const signUp = (req, res) => {
    const bloodBankData = req.body;
    bloodBankData.password = (0, passwordManager_1.createPasswordHash)(bloodBankData.password);
    const newBloodBank = new BloodBank_1.default(bloodBankData);
    newBloodBank.save();
    const token = jsonwebtoken_1.default.sign({ username: newBloodBank.username }, secretKey, { expiresIn: "1h" });
    res.status(200).json({ token: token, userId: newBloodBank._id.toString() });
};
exports.signUp = signUp;
exports.default = login;
