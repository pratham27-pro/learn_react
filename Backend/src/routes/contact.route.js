import express from "express";
import ContactFormUser from "../models/contact-form.js";
import { contactform } from "../controllers/contact.controller.js";

const contactRouter = express.Router();

contactRouter.post("/contact", contactform);

export default contactRouter;