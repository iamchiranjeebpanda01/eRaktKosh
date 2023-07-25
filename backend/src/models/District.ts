import mongoose from "mongoose";

const Schema = mongoose.Schema;

export interface IDistrict extends mongoose.Document{
    name: string;
    bloodbanks: mongoose.Types.ObjectId[];
    donors: mongoose.Types.ObjectId[];
}

export const districtSchema = new Schema<IDistrict>({
    name: {type: String, required: true},
    bloodbanks: [{type: Schema.Types.ObjectId, ref: "Blood Bank"}],
    donors: [{type: Schema.Types.ObjectId, ref: "User"}]
});

const District = mongoose.model<IDistrict>("District", districtSchema);

export default District;