import mongoose from "mongoose";
import { IBloodBank, bloodBankSchema } from "./BloodBank";

const Schema = mongoose.Schema;

export interface IDistrict extends mongoose.Document{
    name: string;
    bloodbanks: IBloodBank[],
    donors: []
}

export const districtSchema = new Schema<IDistrict>({
    name: {type: String, required: true},
    bloodbanks: [bloodBankSchema],
    donors: [{type: Schema.Types.ObjectId, ref: "Blood Bank"}]
});

const District = mongoose.model<IDistrict>("District", districtSchema);

export default District;