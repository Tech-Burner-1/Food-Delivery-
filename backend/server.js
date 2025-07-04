import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import cartRouter from "./routes/cartRoute.js";
import 'dotenv/config'


//APP CONFIG
const app = express();
const PORT = 4000;


//MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//DB CONNECTION
connectDB();

//API ENDPOINTS 
app.use("/food", foodRouter);
app.use("/images", express.static('uploads'));
app.use("/user", userRouter);
app.use("/cart", cartRouter);

app.get("/", (req, res) => {
    res.send("API is Working!!");
});

app.listen(PORT, ()=> {
    console.log(`Server running on http://localhost:${PORT}`);
});