import express from "express";
import {
  getDrivers,
  getFilteredDrivers,
  getDriverWins,
  getDriverPodiums,
  getDriverDNFs,
  getDriverAverageLapTimes,
  getDriverAverageLapTimesWithSeasons,
  getDriverAveragePitTimesWithSeasons,
  getDriverPitCountsWithSeasons,
  getDriverPitAnalysis,
} from "../../controllers/driver.controller";
import { authenticate } from "../../middleware/auth.middleware";

const router = express.Router();
router.use(authenticate);
router.get("/list", getDrivers);
router.post("/search", getFilteredDrivers);
router.get("/statistics/:driverId/wins", getDriverWins);
router.get("/statistics/:driverId/podiums", getDriverPodiums);
router.get("/statistics/:driverId/dnfs", getDriverDNFs);
router.get("/statistics/:driverId/average-lap-times", getDriverAverageLapTimes);
router.get(
  "/statistics/:season/:raceId/average-lap-times",
  getDriverAverageLapTimesWithSeasons
);
router.get(
  "/statistics/:season/:raceId/average-pit-times",
  getDriverAveragePitTimesWithSeasons
);
router.get(
  "/statistics/:season/:raceId/pit-counts",
  getDriverPitCountsWithSeasons
);
router.get('/statistics/:season/:raceId/pit-analysis', getDriverPitAnalysis);
export default router;
