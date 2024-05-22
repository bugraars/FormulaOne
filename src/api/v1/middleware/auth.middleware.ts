import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface RequestWithUser extends Request {
  userId?: number;
}

export const authenticate = (
  req: RequestWithUser,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies["token"];
  if (!token) {
    return res.status(403).send({ auth: false, message: "No token provided." });
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res
      .status(500)
      .send({ auth: false, message: "Failed to authenticate token." });
  }

  jwt.verify(token as string, secret as string, (err, decoded) => {
    if (err) {
      return res
        .status(500)
        .send({ auth: false, message: "Failed to authenticate token." });
    }

    req.userId = (decoded as { userId: number }).userId;
    next();
  });
};
