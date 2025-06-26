import { signUp, login } from "../controllers/User.controller.js";
import { Router } from "express";

const router = Router();
router.post("/signup", signUp);
router.post("/login", login);
export default router;