import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./routes/authRouter";
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/errorMiddleware";

// Load environment variables
dotenv.config({ path: "./.env" });

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin:'http://localhost:5173',credentials: true }));
app.use(cookieParser());

mongoose
  .connect(`${process.env.MONGO_CONNECTION_URL}`)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => {
    console.log(error);
  });

app.use("/app/v1/auth", authRouter);

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
