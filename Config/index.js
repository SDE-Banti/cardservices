import mongoose from "mongoose"
import dotenv from 'dotenv'
dotenv.config()

const connectDB = async(req , res)=>{
    try {
        mongoose.connect(process.env.MongodbUri)
        console.log(`the Database is connected `)
    } catch (error) {
        console.log('there is come error in connection' , error)
    }

}

export default connectDB