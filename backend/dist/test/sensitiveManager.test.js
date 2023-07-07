"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const sensitiveDataManager_1 = require("../utils/sensitiveDataManager");
const dummyData = "This is a dummy data";
const encryptedData = (0, sensitiveDataManager_1.encryptData)(dummyData);
describe("test encryption-decryption functionality", () => {
    it("compare decrypted data to original data", () => {
        chai_1.assert.equal((0, sensitiveDataManager_1.decryptData)(encryptedData), dummyData);
    });
});
