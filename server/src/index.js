const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors());

const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT
};

const pool = mysql.createPool(dbConfig);

app.get('/api/data', (req, res) => {
  pool.query('SELECT * FROM people', (error, results) => {
    if (error) {
      console.log('Error al obtener los datos:', error);
      res.status(500).json({ error: 'Error al obtener los datos' });
    } else {
      res.json(results);
    }
  });
});

const port = 3003;
app.listen(port, () => {
  console.log(`Servidor backend escuchando en el puerto ${port}`);
});