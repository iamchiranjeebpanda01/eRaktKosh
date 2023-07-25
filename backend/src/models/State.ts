import mongoose from "mongoose";

interface IState extends mongoose.Document{
    name: string;
    districts: mongoose.Types.ObjectId[];
}

const Schema = mongoose.Schema;

const stateSchema = new Schema<IState>({
    name: {type: String, required:true, unique:true},
    districts: [{type: Schema.Types.ObjectId, ref: "District"}]
})


const State = mongoose.model<IState>("State", stateSchema);

export default State;