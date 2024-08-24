import express from 'express'
import connectDB from './Config/index.js'
import cardRouter from './Route/cardRoute.js'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app  = express()
app.use(cors())
app.use(express.json())

app.use('/api/Cards',cardRouter)

connectDB()
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`The server is running on port ${process.env.PORT}`);
    });
})
.catch((error) => {
    console.error(`There was an error connecting to the database:`, error);
});