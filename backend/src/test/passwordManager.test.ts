import { createPasswordHash, comparePasswordHash } from "../utils/passwordManager";
import { assert } from "chai";

const myDummyPassword = "This_Is_My_Dummy_Password";
const passwordHash = createPasswordHash(myDummyPassword);

describe("test password and password hash comparision functionality", () => {
    it("compares password and password hash", () => {
        assert.equal(comparePasswordHash(myDummyPassword, passwordHash), true);
    })
})