import mongoose from "mongoose";
import { IBloodBank, bloodBankSchema } from "./BloodBank";

const Schema = mongoose.Schema;

export interface IDistrict extends mongoose.Document{
    name: string;
    bloodbanks: IBloodBank[];
    donors: mongoose.Types.ObjectId[];
}

export const districtSchema = new Schema<IDistrict>({
    name: {type: String, required: true},
    bloodbanks: [bloodBankSchema],
    donors: [{type: Schema.Types.ObjectId, ref: "Donor"}]
});

const District = mongoose.model<IDistrict>("District", districtSchema);

export default District;