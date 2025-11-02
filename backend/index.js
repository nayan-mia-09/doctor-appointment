import express from "express";
import cors from "cors"
import  dotenv  from "dotenv";

dotenv.config()
const app = express();

// Middlware
app.use(cors())
app.use(express.json())


export default app;