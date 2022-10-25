import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const db_config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
};

const connection = mysql.createPool(db_config);

export default connection;
