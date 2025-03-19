import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Einzelspieler.css";
const LOGOS = {
  logoquiz: process.env.PUBLIC_URL + "/DinoGreenLogo.png",
};


const Einzelspieler = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(location.search);
  const fach = params.get("fach");

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [correctAnswers, setCorrectAnswers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (!fach) {
      setError("⚠ Kein Fach angegeben!");
      setLoading(false);
      return;
    }

    fetch(`http://localhost:5000/api/fragen?fach=${encodeURIComponent(fach)}`)
      .then((res) => {
        if (!res.ok) throw new Error("❌ Fehler beim Laden der Fragen!");
        return res.json();
      })
      .then((data) => {
        if (data.length === 0) throw new Error("⚠ Keine Fragen gefunden!");
        setQuestions(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [fach]);

  const handleAnswer = (answerIndex) => {
    setSelectedAnswer(answerIndex);
    setCorrectAnswers((prev) => [
      ...prev,
      answerIndex === questions[currentIndex].richtige_antwort,
    ]);
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setSelectedAnswer(null);
      setCurrentIndex((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  if (loading) return <p className="loading">⏳ Lade Fragen...</p>;
  if (error) return <p className="error">{error}</p>;
  if (!questions.length) return <p className="error">⚠ Keine Fragen gefunden!</p>;

  if (showResults)
    return (
      <div className="quiz-container">
        <div className="header">
          <img src={LOGOS.logoquiz} alt="Hauptlogo" className="logoquiz" />
          <button className="close-button" onClick={() => navigate("/home")}>✖</button>
        </div>
        <h2>📊 Leistungsübersicht</h2>
        <div className="results-container">
          {correctAnswers.map((isCorrect, index) => (
            <div
              key={index}
              className={`result-circle ${isCorrect ? "correct-border" : "incorrect-border"}`}
            >
              {index + 1}
            </div>
          ))}
        </div>
        <button className="home-button" onClick={() => navigate("/home")}>🏠 Zurück zur Startseite</button>
      </div>
    );

  const question = questions[currentIndex];
  const antworten = [question.antwort_1, question.antwort_2, question.antwort_3, question.antwort_4];

  return (
    <div className="quiz-container">
      <div className="header">
        <img src={LOGOS.logoquiz} alt="Hauptlogo" className="logoquiz" />
        <button className="close-button" onClick={() => navigate("/home")}>✖</button>
      </div>
      <h2>Frage {currentIndex + 1} von {questions.length}</h2>
      <p>{question.frage}</p>
      <div className="options">
        {antworten.map((ans, index) => {
          const isCorrect = index + 1 === question.richtige_antwort;
          const isSelected = selectedAnswer === index + 1;
          
          return (
            <button
              key={index}
              className={`option-button 
                ${selectedAnswer !== null ? (isCorrect ? "correct" : isSelected ? "incorrect" : "") : ""}`}
              onClick={() => handleAnswer(index + 1)}
              disabled={selectedAnswer !== null}
            >
              {ans}
            </button>
          );
        })}
      </div>
      {selectedAnswer !== null && (
        <button className="next-button" onClick={nextQuestion}>➡ Nächste Frage</button>
      )}
    </div>
  );
};

export default Einzelspieler;
