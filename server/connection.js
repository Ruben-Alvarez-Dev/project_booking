const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'srv582.hstgr.io',
  port: 3308,
  user: 'u903851063_rubenalvarez',
  password: 'Sevilla_2023',
  database: 'u903851063_booking',

});

module.exports = connection;