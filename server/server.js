const express = require('express');
const mysql = require('mysql2');

const app = express();

app.use(express.json());

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
})


const db = mysql.createConnection({
  host: 'srv582.hstgr.io',
  user: 'u903851063_rubenalvarez',
  password: 'Sevilla_2023',
  database: 'u903851063_booking',
});
