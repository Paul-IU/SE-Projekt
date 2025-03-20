const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root", // Falls dein MySQL-Benutzer anders ist, hier anpassen
  password: "SE-Projekt", // Falls dein MySQL ein Passwort hat, hier setzen
  database: "quiz_db"
});

db.connect(err => {
  if (err) {
    console.error("Fehler bei der Verbindung zur Datenbank:", err);
  } else {
    console.log("Verbindung zur Datenbank erfolgreich!");
  }
});

app.get("/api/fragen", (req, res) => {
  const { fach } = req.query;
  if (!fach) return res.status(400).json({ error: "Fach fehlt" });

  db.query(
    "SELECT id, frage, antwort_1, antwort_2, antwort_3, antwort_4, richtige_antwort FROM fragebogen WHERE fach = ? ORDER BY RAND() LIMIT 5",
    [fach],
    (err, results) => {
      if (err) return res.status(500).json({ error: "Fehler bei der Datenbankanfrage" });
      res.json(results);
    }
  );
});

app.listen(5000, () => {
  console.log("Server läuft auf Port 5000");
});


const authRoutes = require("./routes/authRoutes"); // Importiere die Authentifizierungsrouten
app.use("/api", authRoutes);
