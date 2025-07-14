import express, { json } from "express";
import connectDB from "./configs/db.js";
import userRoute from "./routes/userRoute.js";
import cors from "cors";
const app = express();

await connectDB();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Get working");
});

app.use("/api/user", userRoute);

app.listen(3000, () => {
  console.log("server is working");
});
