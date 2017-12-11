'use strict';

let mysql = require('mysql');
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'db_universitas_mahasiswa'
});

connection.connect();

module.exports = connection;
