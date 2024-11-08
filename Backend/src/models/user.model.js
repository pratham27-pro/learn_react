import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            // unique: true,
            // lowercase: true,
            trim: true,
            index: true
        },
        gender: {
            type: String,
            enum: ['male', 'female', 'other'], 
            required: true,
            index: true
        },
        age: {
            type: Number,
            required: true,
            min: 0, // Optional: enforce a minimum age
            index: true
        },
        contact: {
            type: String, 
            required: true,
            unique: true,
            trim: true,
            index: true
        },
        avatar: {
            type: String, // Cloudinary URL or base64 string
            // required: true,
        },
        foodPreference: {
            type: String,
            enum: ['veg', 'non-veg', 'both'], 
            required: true,
            index: true
        },
        wakingPreference: {
            type: String,
            enum: ['early', 'night'], 
            // required: true,
            index: true
        },
        additional: {
            type: String,
            index: true
        },
    },
    {
        timestamps: true
    }
);

export const User = mongoose.model("User", userSchema);
