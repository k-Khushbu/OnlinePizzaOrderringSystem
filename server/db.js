const mysql = require('mysql2')

const pool = mysql.createPool({
  user: 'root',
  password: 'manager',
  host: 'localhost',
  port: 3306,
  database: 'pizzaorder_db',
  waitForConnections: true,
  connectionLimit: 10,
  maxIdle: 10,
  idleTimeout: 60000,
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
})

module.exports = pool
