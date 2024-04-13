import mongoose from "mongoose";

const mongoDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log('Connected to MongoDB Database ...');
    } catch (error) {
        console.log('Error in MongoDB: ', error.message);
    }
}

export default mongoDB;