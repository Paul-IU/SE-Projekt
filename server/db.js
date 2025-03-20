const mysql = require("mysql2");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "SE-Projekt",
  database: "quiz_db"
});

db.connect(err => {
  if (err) {
    console.error("Fehler bei der Verbindung zur Datenbank:", err);
  } else {
    console.log("Datenbankverbindung erfolgreich!");
  }
});

module.exports = db;
