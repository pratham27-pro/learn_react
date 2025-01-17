import AuthUser from "../models/auth-user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new AuthUser({ username, email, password: hashedPassword });

    try {
    await newUser.save();
    res.status(201)
        .json({ message: "User signup successfull!!"});
    } catch (error) {
        next(errorHandler(300, "Error while doing user signup!"));
    }
}