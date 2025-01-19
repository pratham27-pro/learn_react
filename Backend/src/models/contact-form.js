import mongoose, { mongo } from "mongoose";

const contactFormSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    }
}, { timestamps: true });

const ContactFormUser = mongoose.model("ContactFromUser", contactFormSchema);

export default ContactFormUser;