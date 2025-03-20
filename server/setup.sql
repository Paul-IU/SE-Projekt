CREATE DATABASE IF NOT EXISTS quiz_db;
USE quiz_db;

CREATE TABLE fragebogen (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fach VARCHAR(255) NOT NULL,
    frage TEXT NOT NULL,
    antwort_1 TEXT NOT NULL,
    antwort_2 TEXT NOT NULL,
    antwort_3 TEXT NOT NULL,
    antwort_4 TEXT NOT NULL,
    richtige_antwort INT NOT NULL,
    author_id INT NOT NULL
);

CREATE TABLE benutzer (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    passwort VARCHAR(255) NOT NULL
);
