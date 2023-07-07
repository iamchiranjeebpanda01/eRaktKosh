import { assert } from "chai";
import { encryptData, decryptData } from "../utils/sensitiveDataManager";
const dummyData = "This is a dummy data";
const encryptedData = encryptData(dummyData);
const decryptedData = decryptData(encryptedData)
// console.log(encryptedData);
console.log(decryptedData);

describe("test encryption-decryption functionality", () => {
    it("compare decrypted data to original data", () => {
        assert.equal(decryptData(encryptedData),dummyData);
    })
})