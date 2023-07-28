import mongoose from "mongoose";

interface IUser extends mongoose.Document{
    username: string;
    password: string;
    isAdmin: boolean;
    name: string;
    gender: string;
    age: number;
    email: string;
    mobileNo: string;
    aadharNo: string;
    district: mongoose.Types.ObjectId;
    state: mongoose.Types.ObjectId;
}

const Schema = mongoose.Schema;

const userSchema = new Schema<IUser>({
    username: {type: String, required: true, unique:true},
    password: {type: String, required: true},
    isAdmin: Boolean,
    name: String,
    gender: String,
    age: Number,
    email: String,
    mobileNo: String,
    aadharNo: String,
    district: {type: Schema.Types.ObjectId, ref:"District"},
    state: {type:Schema.Types.ObjectId, ref: "State"}
})

const Donor = mongoose.model("User", userSchema);

export default Donor;