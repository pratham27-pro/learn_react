import ContactFormUser from "../models/contact-form.js";
import { errorHandler } from "../utils/error.js";

export const contactform = async (req, res, next) => {
    const { name, email, body } = req.body;
    const newUser = new ContactFormUser({name, email, body}); 

    try {
        await newUser.save()
        res.status(201)
            .json({ message: "Contact form successfully sent!" });

    } catch (error) {
        next(errorHandler(300, "Error while sending the contact form"));
        console.log("Erorr while sending the contact form");
    }
};
