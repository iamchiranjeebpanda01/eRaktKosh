import mongoose from "mongoose";

export interface IBloodGroup extends mongoose.Document{
    name: string;
    details: mongoose.Types.ObjectId;
    quantity: number;
}

const Schema = mongoose.Schema;

export const bloodGroupSchema = new Schema<IBloodGroup>({
    name: String,
    details: {type: Schema.Types.ObjectId, ref: "Blood Group Details"},
    quantity: Number
});

const BloodGroup = mongoose.model("Blood Group", bloodGroupSchema);

export default BloodGroup;