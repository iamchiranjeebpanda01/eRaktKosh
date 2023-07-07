import { assert } from "chai";
import { encryptData, decryptData } from "../utils/sensitiveDataManager";

const dummyData = "This is a dummy data";
const encryptedData = encryptData(dummyData);

describe("test encryption-decryption functionality", () => {
    it("compare decrypted data to original data", () => {
        assert.equal(decryptData(encryptedData),dummyData);
    })
})