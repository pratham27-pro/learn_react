import mongoose, {Schema} from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId, // the subscriber 
        ref: "User"
    },
    channel: {
        type: Schema.Types.ObjectId, // the one to whom is subscribing
        ref: "User"
    }
}, {timestamps: true})