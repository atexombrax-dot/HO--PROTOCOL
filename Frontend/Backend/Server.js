import express from "express";
import cors from "cors";
import piAuthRoute from "./routes/piAuth.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/pi-auth", piAuthRoute);

app.get("/", (req, res) => {
  res.json({ message: "HOÏ-PROTOCOL Backend Running" });
});

app.use(errorHandler);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`HOÏ-PROTOCOL running on port ${PORT}`);
});
