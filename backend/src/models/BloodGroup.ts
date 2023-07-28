import mongoose from "mongoose";

export interface IBloodGroup extends mongoose.Document{
    name: string;
    details: mongoose.Types.ObjectId;
}

const Schema = mongoose.Schema;

export const bloodGroupSchema = new Schema<IBloodGroup>({
    name: String,
    details: {type: Schema.Types.ObjectId, ref: "Blood Group Details"}
});

const BloodGroup = mongoose.model("Blood Group", bloodGroupSchema);

export default BloodGroup;