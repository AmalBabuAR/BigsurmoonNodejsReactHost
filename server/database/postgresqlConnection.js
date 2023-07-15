import colors from 'colors'
import dotenv from "dotenv";
dotenv.config();
import pkg from 'pg';

const { Pool } = pkg;

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  });

  pool.connect((err, client, done) => {
    if (err) {
      console.error('Error connecting to the database:' .red, err);
    } else {
      console.log(`Postgresql Running on database mode on ${process.env.DB_HOST}:${process.env.DB_PORT}` .yellow);
      // Any additional code you want to execute after the connection is established
      // ...
    }
  });

  export default pool