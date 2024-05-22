import { Request, Response } from "express";
import db from "../config/db.connection";
import { getCircuitStatisticsQuery } from "../sql/circuits.queries";


export const getCircuitStatistics = async (req: Request, res: Response) => {
  try {
    const result = await db.query(getCircuitStatisticsQuery());
    const rows = result.rows;
    if (rows.length === 0) {
      return res.status(404).json({ message: "No circuit statistics found." });
    }
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).send(err);
  }
};
