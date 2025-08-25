import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./router/userRoutes.js";
import catergoryRoutes from "./router/categoryRoutes.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
  methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
};

app.use(cookieParser());
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/user", userRoutes);
app.use("/category", catergoryRoutes);

const port = process.env.port;

app.listen(port, (req, res) => {
  console.log(`server runing at port ${port}`);
});
