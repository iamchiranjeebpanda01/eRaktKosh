import mongoose from "mongoose";
import { connection_string } from "./config";
mongoose.Promise = global.Promise;

export const connectToDatabase = async(): Promise<void> => {
    try{
        await mongoose.connect(connection_string)
    }
    catch(error){
        console.error("Failed to connect: " + error);
        process.exit(1);
    }
}