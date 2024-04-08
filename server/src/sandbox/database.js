const mysql = require('mysql');

const dbConfig = {
  host: 'srv582.hstgr.io',
  user: 'u903851063_rubenalvarez',
  password: 'Sevilla_2023',
  database: 'u903851063_booking',
  port: 3306,
};

const connection = mysql.createConnection(dbConfig);

connection.connect((err) => {
  if (err) {
    console.log('Error al conectar a la base de datos:', err);
  } else {
    console.log('Conexión exitosa a la base de datos');
  }
});