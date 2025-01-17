// routes/user.routes.js
import express from 'express';
import multer from 'multer';
import { User } from '../models/user.model.js';

const router = express.Router();
const upload = multer(); 

// POST route to create a new user profile
router.post('/', upload.single('profilePicture'), async (req, res) => {
    console.log("Received body:", req.body); // To see what is received
    console.log("Received file:", req.file); // To see if it's received

    const { name, gender, age, contactNumber, motherTongue, foodPreference, wake, description } = req.body;

    // Check if the required fields are present
    if (!name || !gender || !age || !contactNumber) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // Creating a new user instance
    const newUser  = new User({
        username: name, 
        gender,
        age,
        contact: contactNumber, 
        avatar: req.file ? req.file.buffer.toString('base64') : '', // Handle avatar
        foodPreference,
        wakingPreference: wake,
        additional: description,
    });

    try {
        await newUser .save();
        res.status(201).json({ message: 'User  profile created successfully!', user: newUser  });
        console.log("Account creation successful!!!");
    } catch (error) {
        console.error("Error saving user:", error); // Log the error for debugging
        res.status(400).json({ error: error.message });
    }
});

// GET route to fetch users with conditions
router.get('/', async (req, res) => {
    const { gender, age } = req.query; 

    const filter = {};
    if (gender) filter.gender = gender;
    if (age) filter.age = { $gte: age }; // Example condition

    try {
        const users = await User.find(filter);
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

export default router;
