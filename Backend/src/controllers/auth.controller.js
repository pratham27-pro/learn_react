import AuthUser from "../models/auth-user.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const signup = async (req, res, next) => {
    console.log("Received signup request with data:", req.body); // Log received data
    
    const { username, email, password } = req.body;
  
    try {
        // Check for duplicate email
        const existingUser = await AuthUser.findOne({ email });
        if (existingUser) {
            console.log("Email already in use:", email); // Log if email already exists
            return next(errorHandler(409, "Email already in use."));
        }
  
        // Hash password
        const hashedPassword = bcryptjs.hashSync(password, 10);
  
        // Create new user
        const newUser = new AuthUser({ username, email, password: hashedPassword });
        await newUser.save();
  
        // Log the new user created
        console.log("New user created:", newUser);

        // Remove the password field from the returned user data
        const userData = { ...newUser._doc };
        delete userData.password; // Correct field name is `password`
  
        // Send back user data (without password)
        console.log("Returning user data:", userData); // Log returned data
        res.status(201).json(userData);
    } catch (error) {
        console.error("Signup error:", error);
        next(errorHandler(500, "Error while doing user signup."));
    }
};


export const signin = async (req, res, next) => {
    const { email, password } = req.body;
    try {
        const validUser = await AuthUser.findOne({ email });
        if (!validUser) {
            return next(errorHandler(401, "Invalid email/credentials"));
        }

        const validPassword = bcryptjs.compareSync(password, validUser.password);  
        if (!validPassword) return next(errorHandler(401, "Invalid credentials"));

        const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
        const { password: hashedPassword, ...rest} = validUser._doc;

        const expiry = new Date(Date.now() + 3600000); // 1hr
        res.cookie("access-token", token, {httpOnly: true, expires: expiry}).status(200).json(validUser);

    } catch (error) {
        next(error);
        console.log("Error while login of the user");
    }
};

export const google = async (req, res, next) => {
    try {
        const user = await AuthUser.findOne({ email: req.body.email });
        if (user) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
            const { password: hashedPassword, ...rest } = user._doc;
            const expiry = new Date(Date.now() + 3600000); // 1hr
            res.cookie("access-token", token, {httpOnly: true, expires: expiry}).status(200).json(rest);


        } else {
            const generatedPassword = Math.random().toString(36).slice(-8);
            const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
            const newUser = new AuthUser({
                username: req.body.name.split(" ").join("").toLowerCase() + 
                            Math.random().toString(36).slice(-8),
                email: req.body.email,
                password: hashedPassword,
                profilePicture: req.body.imageUrl
            })
            await newUser.save();
            const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
            const { password: hashedPassword2, ...rest } = newUser._doc;
            const expiryDate = new Date(Date.now() + 3600000); // 1 hour
            res
              .cookie('access_token', token, {
                httpOnly: true,
                expires: expiryDate,
              })
              .status(200)
              .json(rest);

            
        }


    } catch (error) {
        next(error);
    }
}