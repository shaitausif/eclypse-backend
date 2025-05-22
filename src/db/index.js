import mongoose from "mongoose";


const connectDB = async() => {
    try {
        // mongoose returns an object which contains the connectionInstance
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}`)
     
        console.log(`MongoDB connected  || DB Host: ${connectionInstance.connection.host}`)

    } catch (error) {
        console.log("MongoDb Connection Failed: " , error)
        // node.js give us access of process which is a reference of the current running process of this application
        process.exit(1)
    }
}

export default connectDB