import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || '', {
            serverSelectionTimeoutMS: 5000,
        });
        console.log(`MongoB Connected: ${conn.connection.host}`)
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Error: ${error.message}`)
        } else {
            console.error('An unknow error ocurred')
        }
        process.exit(1)
    }
}

export default connectDB