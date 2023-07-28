import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { connectToDatabase } from "./database/establishConnection";
import authenticateToken from "./utils/authMiddleware";
import adminRouter from "./routes/Admin";
import userRouter from "./routes/User";
import bloodBankRouter from "./routes/BloodBank";

const app = express();

//* Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(authenticateToken);
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/bloodbank", bloodBankRouter);


//* Server Port Definition
connectToDatabase().then(() => {
    let port = 8000;
    app.listen(port, () => {
        console.log(`Listening to server on port ${port}`)
    });
})
