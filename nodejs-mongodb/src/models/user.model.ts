import mongoose, { Schema, Model } from "mongoose";
import { IUser } from "../interfaces/user.interface";

const userSchema: Schema<IUser> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    city: {
        type: String,
        default: null
    }
}, {
    versionKey: false,
    timestamps: true,
});

const User: Model<IUser> = mongoose.model<IUser>("User", userSchema);
export default User;
