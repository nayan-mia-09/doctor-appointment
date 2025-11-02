import mongoose from "mongoose";
import "dotenv/config"
import app from "./index.js";
import { MONGO_URI, PORT } from "./config/config.js";



mongoose.connect(MONGO_URI).then(()=>{
    console.log(`Database Connected.`);
    app.listen(PORT, ()=>{
        console.log(`Server Started at PORT ${PORT}`)
    })
    
}).catch((err)=>{
console.log(`Database Connection Error:`,err)
})