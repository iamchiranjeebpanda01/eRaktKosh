import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./database/establishConnection";
import authenticateToken from "./utils/authMiddleware";

const app = express();

//* Middlewares
app.use(cors());
app.use(authenticateToken);
app.use(bodyParser.json());


//* Server Port Definition
connectToDatabase().then(() => {
    let port = 8000;
    app.listen(port, () => {
        console.log(`Listening to server on port ${port}`)
    });
})
