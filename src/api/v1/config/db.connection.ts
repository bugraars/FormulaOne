import { Pool } from "pg";
const dotenv = require("dotenv");
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: parseInt(process.env.DB_PORT || "5432"),
});

export default pool;
