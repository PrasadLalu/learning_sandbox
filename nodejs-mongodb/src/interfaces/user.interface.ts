import { Document } from "mongoose";

export interface IUser extends Document {
    name: string;
    email: string;
    city?: string | null;
}
