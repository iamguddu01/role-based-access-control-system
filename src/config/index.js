import mongoose from "mongoose"
export const initializeDB = async()=>{
    try {
        await mongoose.connect("mongodb://localhost:27017/role_based")
        console.log("Database Connected");
    } catch (error) {
        console.log("Something went wrong while connecting with DB", error);
    }
}