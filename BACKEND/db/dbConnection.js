const mysql = require("mysql");
//single responsibility
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "project",
  port: "3306",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("DB CONNECTED");
});

module.exports = connection;
