import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import userRouter from "./routes/user.routes.js"; // Import user routes
import authRouter from "./routes/auth.route.js";
import contactRouter from "./routes/contact.route.js";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();

// CORS Configuration (check if CORS_ORIGIN is defined)
app.use(cors({
    origin: [process.env.CORS_ORIGIN || "http://localhost:5173"],// filter out undefined values
    credentials: true,
}));

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Backend is running!' });
});

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes declaration
app.use("/api/v1/users", userRouter); // Use the user routes
app.use("/api/auth", authRouter);
app.use("/api", contactRouter);

// Global error handler (log the error to console for better debugging)
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server error";
    console.error("Error:", err); // Log error details to console
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    });
});

export { app };
