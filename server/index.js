import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import cors from 'cors';
import dotenv from "dotenv";

import postRoutes from './routes/posts.js';

const app = express();
dotenv.config();

app.use('/posts', postRoutes)

app.use(bodyParser.json({ limit: "30mb", extended: true}))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true}))
app.use(cors())

const CONNECTION_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(()=>app.listen(PORT, () => console.log(`Server is running on ${PORT} port`)))
   .catch((err)=>console.log(err.message))