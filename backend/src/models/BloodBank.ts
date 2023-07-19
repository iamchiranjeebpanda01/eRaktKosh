import mongoose, { Date } from "mongoose";

export interface IBloodBank extends mongoose.Document{
    username: string;
    password: string;
    name: string;
    parent_hospital: string;
    category: string;
    lastUpdated: Date;
    BloodGroups: []
}

const Schema = mongoose.Schema;

export const bloodBankSchema = new Schema<IBloodBank>({
    username: String,
    password: String,
    name: {type: String, required:true},
    parent_hospital: String,
    category: String,
    lastUpdated: {type: Date},
    BloodGroups: [{type: Schema.Types.ObjectId, ref: "Blood Group"}]
});

const BloodBank = mongoose.model<IBloodBank>("Blood Bank", bloodBankSchema);

export default BloodBank;