import mongoose, { Date } from "mongoose";

export interface IBloodBank extends mongoose.Document{
    username: string;
    password: string;
    name: string;
    parent_hospital: string;
    category: string;
    lastUpdated: Date;
    BloodGroups: mongoose.Types.ObjectId[];
    district: mongoose.Types.ObjectId;
    state: mongoose.Types.ObjectId;
}

const Schema = mongoose.Schema;

export const bloodBankSchema = new Schema<IBloodBank>({
    username: String,
    password: String,
    name: {type: String, required:true},
    parent_hospital: String,
    category: String,
    lastUpdated: Date,
    BloodGroups: [{type: Schema.Types.ObjectId, ref:"Blood Group"}],
    district: {type: Schema.Types.ObjectId, ref:"District"},
    state: {type: Schema.Types.ObjectId, ref:"State"}
});

const BloodBank = mongoose.model<IBloodBank>("Blood Bank", bloodBankSchema);

export default BloodBank;