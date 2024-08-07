import mongoose from "mongoose"
import {DB_NAME} from "../constants.js"


const connectDB = async () => {
    try {
        const connnectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)
        console.log(`mongoDB connected succesfully || host is `,connnectionInstance.connection.host)
    } catch (error) {
        console.log(`mongoDB connection failed due to ${error}`)
    }
}

export default connectDB