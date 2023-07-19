"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const establishConnection_1 = require("./database/establishConnection");
const app = (0, express_1.default)();
//* Middlewares
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
//* Server Port Definition
(0, establishConnection_1.connectToDatabase)().then(() => {
    app.listen(8000);
});
