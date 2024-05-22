import { Request, Response } from "express";
import db from "../config/db.connection";
import {
  getDriversQuery,
  getDriverStatisticsQuery,
  getFilteredDriversQuery,
  getDriverWinsQuery,
  getDriverPodiumsQuery,
  getDriverDNFsQuery,
  getDriverAverageLapTimesQuery,
  getDriverAveragePitTimesWithSeasonsQuery,
  getDriverPitCountsWithSeasonsQuery,
  getDriverAverageLapTimesWithSeasonsQuery,
  getDriverPitAnalysisQuery,
} from "../sql/driver.queries";

export const getDrivers = async (req: Request, res: Response) => {
  try {
    const result = await db.query(getDriversQuery);
    const rows = result.rows;
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDriverStatistics = async (req: Request, res: Response) => {
  try {
    const result = await db.query(getDriverStatisticsQuery);
    res.json(result.rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getFilteredDrivers = async (req: Request, res: Response) => {
  const filters = req.body;
  try {
    const query = getFilteredDriversQuery(filters);
    const result = await db.query(query);
    const rows = result.rows;
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDriverWins = async (req: Request, res: Response) => {
  const driverId = parseInt(req.params.driverId);
  try {
    const result = await db.query(getDriverWinsQuery(driverId));
    const rows = result.rows;
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDriverPodiums = async (req: Request, res: Response) => {
  const driverId = parseInt(req.params.driverId);
  try {
    const result = await db.query(getDriverPodiumsQuery(driverId));
    const rows = result.rows;
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDriverDNFs = async (req: Request, res: Response) => {
  const driverId = parseInt(req.params.driverId);
  try {
    const { rows } = await db.query(getDriverDNFsQuery(driverId));
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getDriverAverageLapTimes = async (req: Request, res: Response) => {
  const driverId = parseInt(req.params.driverId);
  try {
    const { rows } = await db.query(getDriverAverageLapTimesQuery(driverId));
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};


export const getDriverAverageLapTimesWithSeasons = async (req: Request, res: Response) => {
    const season = parseInt(req.params.season);
    const raceId = parseInt(req.params.raceId);
    try {
        const result = await db.query(getDriverAverageLapTimesWithSeasonsQuery(season, raceId));
        const rows = result.rows;
        res.json(rows);
    } catch (err) {
        res.status(500).send(err);
    }
};

export const getDriverAveragePitTimesWithSeasons = async (req: Request, res: Response) => {
  const season = parseInt(req.params.season);
  const raceId = parseInt(req.params.raceId);
  try {
      const result = await db.query(getDriverAveragePitTimesWithSeasonsQuery(season, raceId));
      const rows = result.rows;
      if (rows.length === 0) {
          return res.status(404).json({ message: 'No data found for the given season and race.' });
      }
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send(err);
  }
};

export const getDriverPitCountsWithSeasons = async (req: Request, res: Response) => {
  const season = parseInt(req.params.season);
  const raceId = parseInt(req.params.raceId);
  try {
      const result = await db.query(getDriverPitCountsWithSeasonsQuery(season, raceId));
      const rows = result.rows;
      if (rows.length === 0) {
          return res.status(404).json({ message: 'No data found for the given season and race.' });
      }
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send(err);
  }
};
export const getDriverPitAnalysis = async (req: Request, res: Response) => {
  const season = parseInt(req.params.season);
  const raceId = parseInt(req.params.raceId);
  try {
      const result = await db.query(getDriverPitAnalysisQuery(season, raceId));
      const rows = result.rows;
      if (rows.length === 0) {
          return res.status(404).json({ message: 'No data found for the given season and race.' });
      }
      res.json(rows);
  } catch (err) {
      console.error(err);
      res.status(500).send(err);
  }
};