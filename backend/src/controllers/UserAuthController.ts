import jwt from "jsonwebtoken";
import User from "../models/User";
import { comparePasswordHash, createPasswordHash } from "../utils/passwordManager";
import { encryptData } from "../utils/sensitiveDataManager";
const secretKey = "eRaktKosh-secret-key";


const login = (req:any, res: any) => {
    const {username, password} = req.body;

    let loadedUser: any;

    User.findOne({username: username})
    .then((user) => {
        if(!user){
            const error = new Error("User not found!");
            throw error;
        }
        else{
            loadedUser = user;
            return comparePasswordHash(password, user.password);
        }
    })
    .then((isEqual) => {
        if(!isEqual){
            const error = new Error("Invalid Password!");
            throw error;
        }

        const token = jwt.sign({username: loadedUser.username}, secretKey, {expiresIn: "1h"});
        res.status(200).json({token: token, userId: loadedUser._id.toString()});
    })
}

export const signUp = (req:any, res:any) => {
    const userData = req.body;
    userData.password = createPasswordHash(userData.password);
    userData.email = encryptData(userData.email);
    userData.mobileNo = encryptData(userData.mobileNo);
    userData.aadharNo = encryptData(userData.aadharNo);

    const newUser = new User(userData);
    newUser.save();

    const token = jwt.sign({username: newUser.username}, secretKey, {expiresIn: "1h"});
    res.status(201).json({token: token, userId: newUser._id.toString()});
}


export default login;