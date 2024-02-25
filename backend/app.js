import express from "express";
import cookieParser from "cookie-parser";
import path from "path";
import cors from "cors";

import { userRouter } from "./routes/User.js";
export const app = express();

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(cookieParser());
app.use(cors({
    Credentials:true,
    methods:["GET","POST","PUT","DELETE"],
    origin:["https://portfolio-jdbkcoaa5-saikirannarawad.vercel.app","http://localhost:3000","https://portfolio-saikirannarawad.vercel.app/"],
}));

app.get("/", (req, res, next) => {
    res.send("Working");
  });

  
app.use("/api/v1", userRouter);

// app.use(express.static(path.resolve("./frontend/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve("./frontend/build/index.html"));
// });
