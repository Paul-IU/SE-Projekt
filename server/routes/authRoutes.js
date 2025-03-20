const express = require("express");
const db = require("../db"); // Importiere die Datenbankverbindung
const bcrypt = require("bcrypt");
const util = require("util");

const router = express.Router();
const query = util.promisify(db.query).bind(db); // Macht db.query() Promise-basiert

// **REGISTRIERUNG: Benutzer speichern**
router.post("/register", async (req, res) => {
  let { email, passwort } = req.body;

  if (!email || !passwort) {
    return res.status(400).json({ error: "E-Mail und Passwort sind erforderlich" });
  }

  email = email.toLowerCase(); // E-Mail immer in Kleinbuchstaben speichern

  // E-Mail-Validierung (RegEx für grundlegende E-Mail-Prüfung)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Ungültige E-Mail-Adresse!" });
  }

  try {
    // Prüfen, ob die E-Mail bereits existiert
    const existingUser = await query("SELECT * FROM benutzer WHERE email = ?", [email]);

    if (existingUser.length > 0) {
      return res.status(400).json({ error: "E-Mail ist bereits registriert" });
    }

    // Passwort sicher hashen
    const hashedPassword = await bcrypt.hash(passwort, 10);

    // Benutzer in die Datenbank einfügen
    await query("INSERT INTO benutzer (email, passwort) VALUES (?, ?)", [email, hashedPassword]);

    res.status(201).json({ message: "Registrierung erfolgreich!" });
  } catch (error) {
    console.error("Fehler bei der Registrierung:", error);
    res.status(500).json({ error: "Serverfehler" });
  }
});

// **LOGIN: Benutzer authentifizieren**
router.post("/login", async (req, res) => {
  let { email, passwort } = req.body;

  if (!email || !passwort) {
    return res.status(400).json({ error: "E-Mail und Passwort sind erforderlich" });
  }

  email = email.toLowerCase(); // Kleinbuchstaben für Vergleich

  try {
    const userResult = await query("SELECT * FROM benutzer WHERE email = ?", [email]);

    if (userResult.length === 0) {
      return res.status(401).json({ error: "E-Mail oder Passwort ist falsch" });
    }

    const user = userResult[0];

    // Passwort prüfen
    const isPasswordValid = await bcrypt.compare(passwort, user.passwort);
    if (!isPasswordValid) {
      return res.status(401).json({ error: "E-Mail oder Passwort ist falsch" });
    }

    res.status(200).json({ message: "Login erfolgreich!", user: { email: user.email } });
  } catch (error) {
    console.error("Fehler beim Login:", error);
    res.status(500).json({ error: "Serverfehler" });
  }
});

module.exports = router;
