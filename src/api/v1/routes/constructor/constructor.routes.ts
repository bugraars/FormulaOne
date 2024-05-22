import express from "express";
import {
  getConstructors,
  getConstructorStatistics,
  getFilteredConstructors,
  getConstructorWins,
  getConstructorPodiums,
} from "../../controllers/constructor.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = express.Router();
router.use(authenticate);
router.get("/list", getConstructors);
router.get("/statistics", getConstructorStatistics);
router.post("/search", getFilteredConstructors);
router.get("/statistics/:constructorId/podiums", getConstructorPodiums);
router.get("/statistics/:constructorId/wins", getConstructorWins);

export default router;
