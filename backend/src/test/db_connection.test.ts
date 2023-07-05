import mongoose from "mongoose";
import { connection_string } from "../database/config";
import { before, beforeEach } from "node:test";

mongoose.Promise = global.Promise;
mongoose.connect(connection_string);

before((done) => {
    mongoose.connection
        .once("open", () => {console.log("Good to go!")})
        .on("error", (error) => {console.warn("Warning: ", error)})
        done();
})

beforeEach(() => {
    mongoose.connection.collections.users.drop();
})

