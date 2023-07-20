import mongoose from "mongoose";

export interface IBloodGroupDetails extends mongoose.Document{
    name: string;
    donors: string[];
    receivers: string[]
}

const Schema = mongoose.Schema;

export const bloodGroupDetailsSchema = new Schema<IBloodGroupDetails>({
    name: String,
    donors: [],
    receivers: []
});

const BloodGroupDetails = mongoose.model("Blood Group Details", bloodGroupDetailsSchema);

export default BloodGroupDetails;