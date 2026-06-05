import express from "express";
import {
  analyzeProfileCon,
  getAllProfilesCon,
  getProfileCon,
} from "../controllers/githubTask.js";
const router = express.Router();
router.route("/analyze/:username").get(analyzeProfileCon);
router.route("/profiles").get(getAllProfilesCon);
router.route("/profiles/:username").get(getProfileCon);
export default router;
