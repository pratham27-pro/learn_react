// app.js
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // Import user routes

const app = express();

app.use(cors({
    origin: ["http://localhost:5173", process.env.CORS_ORIGIN], // Allow requests from your frontend
    credentials: true,
}));

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userRouter); // Use the user routes

export { app };
