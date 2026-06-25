import express from "express";
import { authenticatePiUser } from "../controllers/authController.js";

const router = express.Router();

// Login Pi Network
router.post("/", authenticatePiUser);

export default router;
