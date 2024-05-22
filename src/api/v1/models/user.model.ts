
import { Pool } from 'pg';
import bcrypt from 'bcrypt';
import db from '../config/db.connection';

interface User {
  id: number;
  username: string;
  password: string;
}

class UserModel {
  private pool: Pool;

  constructor() {
    this.pool = db;
  }

  async create(username: string, password: string): Promise<User> {
    const hashedPassword = await bcrypt.hash(password, 10);
    const result = await this.pool.query(
      'INSERT INTO users (username, password) VALUES ($1, $2) RETURNING id, username',
      [username, hashedPassword]
    );
    return result.rows[0];
  }

  async findByUsername(username: string): Promise<User | null> {
    const result = await this.pool.query('SELECT * FROM users WHERE username = $1', [username]);
    return result.rows[0] || null;
  }
}

export default new UserModel();
