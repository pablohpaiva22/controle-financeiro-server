import mysql from "mysql2";

const db_config = {
  host: "us-cdbr-east-06.cleardb.net",
  user: "bcbb941358aa45",
  database: "heroku_051d91685db6ea0",
  password: "0c98e5ef",
};

const connection = mysql.createPool(db_config);

export default connection;
