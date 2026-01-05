import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import "dotenv/config" 
import bcrypt from "bcryptjs"
import cookieParser from "cookie-parser"

import connectDB from "./config/mongodb.js"

import authRouter from './routes/authRoutes.js'
import userRouter from "./routes/userRoutes.js"

process.on("uncaughtException", (err) => {
  console.error("❌ Uncaught Exception:", err);
});

process.on("unhandledRejection", (reason, promise) => {
  console.error("❌ Unhandled Rejection:", reason);
});

const app = express(); //express app
const port = process.env.PORT || 4000
connectDB();

const allowedOrigins = ['http://localhost:5173']




app.use(express.json());
app.use(cookieParser());
app.use(cors({origin: allowedOrigins, credentials: true}));


//API ENDPOINTS
app.get('/', (req,res) => res.send("API Working!"));
app.use('/api/auth', authRouter);
app.use('/api/user', userRouter);

app.listen(port, ()=> console.log(`Sever started on port ${port}`))
