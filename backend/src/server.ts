import express from "express";
import mongoose from "mongoose";
import { connectToDatabase } from "./database/establishConnection";

const app = express();

connectToDatabase().then(() => {
    app.listen(8000);
})
