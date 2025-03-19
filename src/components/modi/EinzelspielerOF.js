import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Einzelspieler.css";

const questions = [
  {
    question: "Was ist die Hauptstadt von Frankreich?",
    options: ["Berlin", "Madrid", "Paris", "Rom"],
    correct: 2,
  },
  {
    question: "Welches Element hat das chemische Symbol 'O'?",
    options: ["Gold", "Silber", "Sauerstoff", "Eisen"],
    correct: 2,
  },
  {
    question: "Wer schrieb 'Faust'?",
    options: ["Schiller", "Goethe", "Lessing", "Kafka"],
    correct: 1,
  },
  {
    question: "Wie viele Kontinente gibt es?",
    options: ["5", "6", "7", "8"],
    correct: 2,
  },
  {
    question: "Was ist die Wurzel aus 64?",
    options: ["6", "7", "8", "9"],
    correct: 2,
  },
];

const EinzelspielerOF = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const navigate = useNavigate();

  const handleAnswerClick = (index) => {
    if (selectedOption === null) {
      setSelectedOption(index);
      setAnsweredQuestions([
        ...answeredQuestions,
        {
          question: questions[currentQuestion].question,
          selected: index,
          correct: questions[currentQuestion].correct,
        },
      ]);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setSelectedOption(null);
    setAnsweredQuestions([]);
  };

  return (
    <div className="quiz-container">
      {currentQuestion < questions.length ? (
        <div>
          <h2>{questions[currentQuestion].question}</h2>
          <div className="options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                className={`option-button ${
                  selectedOption !== null
                    ? index === questions[currentQuestion].correct
                      ? "correct"
                      : index === selectedOption
                      ? "incorrect"
                      : ""
                    : ""
                }`}
                onClick={() => handleAnswerClick(index)}
                disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedOption !== null && (
            <button className="next-button" onClick={handleNextQuestion}>
              Weiter
            </button>
          )}
        </div>
      ) : (
        <div>
          <h2>Quiz beendet!</h2>
          <ul>
            {answeredQuestions.map((q, index) => (
              <li key={index} className={q.selected === q.correct ? "correct" : "incorrect"}>
                {q.question} - Deine Antwort: {questions[index].options[q.selected]} ({
                  q.selected === q.correct ? "Richtig" : "Falsch"
                })
              </li>
            ))}
          </ul>
          <button className="restart-button" onClick={handleRestart}>
            Nochmal spielen
          </button>
          <button className="home-button" onClick={() => navigate("/")}>Zurück zur Startseite</button>
        </div>
      )}
    </div>
  );
};
console.log("EinzelspielerOF loaded!");
export default EinzelspielerOF;
