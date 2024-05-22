import { Request, Response } from "express";
import db from "../config/db.connection";
import {
  getFilteredConstructorsQuery,
  getConstructorsQuery,
  getConstructorStatisticsQuery,
  getConstructorWinsQuery,
  getConstructorPodiumsQuery,
} from "../sql/constructor.queries";

export const getConstructors = async (req: Request, res: Response) => {
  try {
    const result = await db.query(getConstructorsQuery);
    const rows = result.rows;
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getConstructorStatistics = async (req: Request, res: Response) => {
  try {
    const result = await db.query(getConstructorStatisticsQuery);
    const rows = result.rows;
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getFilteredConstructors = async (req: Request, res: Response) => {
  const filters = req.body;
  try {
    const query = getFilteredConstructorsQuery(filters);
    const result = await db.query(query);
    const rows = result.rows;
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getConstructorWins = async (req: Request, res: Response) => {
  const constructorId = parseInt(req.params.constructorId);
  try {
    const result = await db.query(getConstructorWinsQuery(constructorId));
    const rows = result.rows;
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getConstructorPodiums = async (req: Request, res: Response) => {
  const constructorId = parseInt(req.params.constructorId);
  try {
    const result = await db.query(getConstructorPodiumsQuery(constructorId));
    const rows = result.rows;
    res.json(rows[0]);
  } catch (err) {
    res.status(500).send(err);
  }
};
