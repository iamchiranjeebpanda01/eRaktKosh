"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const config_1 = require("../database/config");
const node_test_1 = require("node:test");
mongoose_1.default.Promise = global.Promise;
mongoose_1.default.connect(config_1.connection_string);
(0, node_test_1.before)((done) => {
    mongoose_1.default.connection
        .once("open", () => { console.log("Good to go!"); })
        .on("error", (error) => { console.warn("Warning: ", error); });
    done();
});
(0, node_test_1.beforeEach)(() => {
    mongoose_1.default.connection.collections.users.drop();
});
