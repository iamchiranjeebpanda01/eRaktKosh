"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const passwordManager_1 = require("../utils/passwordManager");
const chai_1 = require("chai");
const myDummyPassword = "This_Is_My_Dummy_Password";
const passwordHash = (0, passwordManager_1.createPasswordHash)(myDummyPassword);
describe("test password and password hash comparision functionality", () => {
    it("compares password and password hash", () => {
        chai_1.assert.equal((0, passwordManager_1.comparePasswordHash)(myDummyPassword, passwordHash), true);
    });
});
