import mongoose from "mongoose";


export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://PROJECT1:PROJECT100@dusribiwi.x7h8kim.mongodb.net/foode-del').then(() => console.log("Connected to DB"));
};

