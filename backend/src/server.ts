import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./database/establishConnection";

const app = express();

//* Middlewares
app.use(bodyParser.json());
app.use(cors());

//* Server Port Definition
connectToDatabase().then(() => {
    let port = 8000;
    app.listen(port, () => {
        console.log(`Listening to server on port ${port}`)
    });
})
