import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import connectionCloudinary from "./config/cloudnary.js";
import adminRouter from "./routes/adminRoutes.js";
import doctorRouter from "./routes/doctorRoutes.js";

// App config

const app = express();
const port = process.env.PORT || 8000;
connectDB();
connectionCloudinary();

// middlewares

app.use(express.json());
app.use(cors());

// api endpoints

app.use('/api/admin', adminRouter)
app.use('/api/doctor' ,doctorRouter)

app.get("/", (req, res) => {
  res.send("API WORKING GREAT");
});

app.listen(port, () => console.log("Server runnig on port: ", port));
