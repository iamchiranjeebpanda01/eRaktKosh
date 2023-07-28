import jwt from "jsonwebtoken";
import BloodBank from "../models/BloodBank";
import { comparePasswordHash, createPasswordHash } from "../utils/passwordManager";
const secretKey = "eRaktKosh-secret-key";

const login = (req:any, res: any) => {
    const {username, password} = req.body;

    let loadedBloodBank: any;

    BloodBank.findOne({username: username})
    .then((bloodBank) => {
        if(!bloodBank){
            const error = new Error("Blood Bank not found!");
            throw error;
        }
        else{
            loadedBloodBank = bloodBank;
            return comparePasswordHash(password, bloodBank.password);
        }
    })
    .then((isEqual) => {
        if(!isEqual){
            const error = new Error("Invalid Password!");
            throw error;
        }

        const token = jwt.sign({username: loadedBloodBank.username}, secretKey, {expiresIn: "1h"});
        res.status(200).json({token: token, userId: loadedBloodBank._id.toString()});
    })
}

export const signUp = (req:any, res:any) => {
    const bloodBankData = req.body;
    bloodBankData.password = createPasswordHash(bloodBankData.password);
    const newBloodBank = new BloodBank(bloodBankData);
    newBloodBank.save();

    const token = jwt.sign({username: newBloodBank.username}, secretKey, {expiresIn: "1h"});
    res.status(200).json({token: token, userId: newBloodBank._id.toString()});
}

export default login;