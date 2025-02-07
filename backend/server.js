import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDb from "./config/mongodb.js";
import connectCloudinary from "./config/cloudinary.js";

//   App config

const app = express();
const port = process.env.PORT || 4000;
connectDb();
connectCloudinary();

//   Middlewares

app.use(express.json());
app.use(cors());

// API endpoints

app.get("/", (req, res) => {
  res.send("API working. Les gooooo");
});

app.listen(port, () => console.log("Server started on port: " + port));
