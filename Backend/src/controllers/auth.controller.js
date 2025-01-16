import AuthUser from "../models/auth-user.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new AuthUser({ username, email, password: hashedPassword });

    try {
    await newUser.save();
    res.status(200)
        .json({ message: "User signup successfull!!"});
    } catch (error) {
        res.status(500)
            .json("Error while user signup", error.message);
    }
}