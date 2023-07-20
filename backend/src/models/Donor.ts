import mongoose from "mongoose";

interface IDonor extends mongoose.Document{
    username: string;
    password: string;
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

const donorSchema = new Schema<IDonor>({
    username: String,
    password: String,
    name: String,
    gender: String,
    age: Number,
    email: String,
    mobileNo: String,
    aadharNo: String,
    district: {type: Schema.Types.ObjectId, ref:"District"},
    state: {type:Schema.Types.ObjectId, ref: "State"}
})

const Donor = mongoose.model("Donor", donorSchema);

export default Donor;