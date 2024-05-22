import { Request, Response } from "express";
import db from "../config/db.connection";
import {
  getSeasonResultsQuery,
  getSeasonWinsQuery,
  getSeasonPodiumsQuery,
} from "../sql/seasons.queries";

export const getSeasonWins = async (req: Request, res: Response) => {
  const year = parseInt(req.params.year);
  try {
    const query = getSeasonWinsQuery(year);
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};
export const getSeasonResults = async (req: Request, res: Response) => {
  const year = parseInt(req.params.year);
  try {
    const query = getSeasonResultsQuery(year);
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};

export const getSeasonPodiums = async (req: Request, res: Response) => {
  const year = parseInt(req.params.year);
  try {
    const query = getSeasonPodiumsQuery(year);
    const { rows } = await db.query(query);
    res.json(rows);
  } catch (err) {
    res.status(500).send(err);
  }
};
