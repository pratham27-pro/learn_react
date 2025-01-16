import express from "express";
import { signup } from "../controllers/auth.controller.js";

const authRouter = express();

authRouter.post("/signup", signup);

export default authRouter;