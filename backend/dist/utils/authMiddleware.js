"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secretKey = "eRaktKosh-secret-key";
//* Middleware to protect routes
const authenticateToken = (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
        return res.status(401).json({ message: "No token provided." });
    }
    jsonwebtoken_1.default.verify(token, secretKey, (err, user) => {
        if (err) {
            return res.status(403).json({ message: "Invalid token." });
        }
        req.user = user;
        next();
    });
};
exports.default = authenticateToken;
