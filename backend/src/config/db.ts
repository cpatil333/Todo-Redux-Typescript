import mongoose from "mongoose";

const connectedDatabase = async () =>{
    try {
        console.log(process.env.MONGO_URL);
        await mongoose.connect(process.env.MONGO_URL as string);
        console.log("MongoDB Connected...")
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
};


export default connectedDatabase;