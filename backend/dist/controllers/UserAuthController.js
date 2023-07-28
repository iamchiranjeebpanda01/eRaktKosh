"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const passwordManager_1 = require("../utils/passwordManager");
const sensitiveDataManager_1 = require("../utils/sensitiveDataManager");
const secretKey = "eRaktKosh-secret-key";
const login = (req, res) => {
    const { username, password } = req.body;
    let loadedUser;
    User_1.default.findOne({ username: username })
        .then((user) => {
        if (!user) {
            const error = new Error("User not found!");
            throw error;
        }
        else {
            loadedUser = user;
            return (0, passwordManager_1.comparePasswordHash)(password, user.password);
        }
    })
        .then((isEqual) => {
        if (!isEqual) {
            const error = new Error("Invalid Password!");
            throw error;
        }
        const token = jsonwebtoken_1.default.sign({ username: loadedUser.username }, secretKey, { expiresIn: "1h" });
        res.status(200).json({ token: token, userId: loadedUser._id.toString() });
    });
};
const signUp = (req, res) => {
    const userData = req.body;
    userData.password = (0, passwordManager_1.createPasswordHash)(userData.password);
    userData.email = (0, sensitiveDataManager_1.encryptData)(userData.email);
    userData.mobileNo = (0, sensitiveDataManager_1.encryptData)(userData.mobileNo);
    userData.aadharNo = (0, sensitiveDataManager_1.encryptData)(userData.aadharNo);
    const newUser = new User_1.default(userData);
    newUser.save();
    const token = jsonwebtoken_1.default.sign({ username: newUser.username }, secretKey, { expiresIn: "1h" });
    res.status(201).json({ token: token, userId: newUser._id.toString() });
};
exports.signUp = signUp;
exports.default = login;
