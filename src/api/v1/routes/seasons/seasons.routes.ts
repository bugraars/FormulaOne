import express from "express";
import {
  getSeasonResults,
  getSeasonWins,
  getSeasonPodiums,
} from "../../controllers/seasons.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = express.Router();
router.use(authenticate);
router.get("/:year/results", getSeasonResults);
router.get("/:year/podiums", getSeasonPodiums);
router.get("/:year/wins", getSeasonWins);
export default router;
