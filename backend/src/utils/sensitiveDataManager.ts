import cryptojs from "crypto-js";
const password = "eRaktKoshSensitiveData";

export const encryptData = (data:string) => {
    return cryptojs.AES.encrypt(data, password).toString();
}

export const decryptData = (encryptedData: string) => {
    return cryptojs.AES.decrypt(encryptedData, password).toString(cryptojs.enc.Utf8);
}