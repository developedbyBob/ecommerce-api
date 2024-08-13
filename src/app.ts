import express from "express";
import dotenv from "dotenv"
import connectDB from "./config/database";

dotenv.config()

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json())

connectDB()

app.get('/', (req, res) => {
    res.send('E-commerce API')
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
