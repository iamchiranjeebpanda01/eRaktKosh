import mongoose from "mongoose";
import { districtSchema, IDistrict } from "./District";

interface IState extends mongoose.Document{
    name: string;
    districts: IDistrict[];
}

const Schema = mongoose.Schema;

const stateSchema = new Schema<IState>({
    name: {type: String, required:true},
    districts: [districtSchema]
})


const State = mongoose.model<IState>("State", stateSchema);

State.collection.createIndex({"districts.name": 1})

export default State;