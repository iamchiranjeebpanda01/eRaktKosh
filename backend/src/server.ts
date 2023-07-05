import express from "express";
import { connectToDatabase } from "./database/establishConnection";
const app = express();

connectToDatabase().then(() => {
    app.listen(8000, () => {
        console.log("Listening on port 8000")
    });
})