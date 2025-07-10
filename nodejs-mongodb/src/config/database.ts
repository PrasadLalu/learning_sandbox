import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const MONGO_URI = process.env.MONGO_URI;
    
        if (!MONGO_URI) {
            throw new Error('MONGO_URI is not defined in environment variables');
        }
        await mongoose.connect(MONGO_URI, {
            serverSelectionTimeoutMS: 5000,
            maxPoolSize: 10,
        });
        console.log("✅ MongoDB connected");
    } catch (error) {
        console.error(`❌ Database Error: ${error}`);
        setTimeout(connectDB, 5000);
    }
};

export default connectDB;
