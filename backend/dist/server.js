"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const establishConnection_1 = require("./database/establishConnection");
const authMiddleware_1 = __importDefault(require("./utils/authMiddleware"));
const app = (0, express_1.default)();
//* Middlewares
app.use((0, cors_1.default)());
app.use(authMiddleware_1.default);
app.use(body_parser_1.default.json());
//* Server Port Definition
(0, establishConnection_1.connectToDatabase)().then(() => {
    let port = 8000;
    app.listen(port, () => {
        console.log(`Listening to server on port ${port}`);
    });
});
