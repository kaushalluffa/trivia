import React from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import "./quiz.css";

const Quiz = () => {
  const [showNextQuiz, setShowNextQuiz] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState("");
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    correct_answer: "",
    incorrect_answers: [],
    category: "",
    difficulty: "",
  });
  const [checked, setChecked] = useState({ checked: "" });
  function getQuestion() {
    Axios.get(
      "https://opentdb.com/api.php?amount=1&difficulty=easy&type=multiple"
    ).then((res) => {
      const { category, difficulty, question, correct_answer } =
        res.data.results[0];

      ////////////////
      const arr = [...res.data.results[0].incorrect_answers];

      arr.push(res.data.results[0].correct_answer);
      function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffleArray(arr);
      ///////////////

      setNewQuestion({
        question: question,
        correct_answer: correct_answer,
        category: category,
        incorrect_answers: arr,
        difficulty: difficulty,
      });
    });
  }
  useEffect(() => {
    getQuestion();
  }, []);
  function handleChange(e) {
      setChecked({ checked: e.target.value });
  }
  function checkAnswer() {
    if (checked.checked === newQuestion.correct_answer) {
      setIsCorrectAnswer(true);
    } else {
      setIsCorrectAnswer(false);
    }
  }
  function showNextQuestion() {
    getQuestion();
    setIsCorrectAnswer("");
  }
  
  return (
    <div>
        
      <div className="container--quiz" id="container">
        <div className="container__header--quiz">
          <h1 className="animate__animated animate__fadeInDown">Play Trivia</h1>
          <h2
            id="category"
            className="animate__animated animate__fadeInDown animate__delay-1s"
          >
            Category: {newQuestion.category}
          </h2>
          <p
            id="difficulty"
            className="animate__animated animate__fadeInDown animate__delay-1s"
          >
            Difficulty Level: {newQuestion.difficulty}
          </p>
        </div>
        <div className="container__question-answer animate__fadeInDown animate__delay-1s">
          <div className="container__question animate__fadeInDown animate__delay-1s">
            <p id="question">{newQuestion.question}</p>
          </div>

          <div className="container__answers animate__animated animate__fadeInLeft animate__delay-1s">
            {isCorrectAnswer === "" &&
              newQuestion.incorrect_answers.map((ans, idx) => {
                return (
                  <label
                    htmlFor={`option${idx + 1}`}
                    className="container__answer"
                    key={idx + 1}
                  >
                    <input
                      type="radio"
                      name="option"
                      id={`option${idx + 1}`}
                      value={ans}
                      onChange={handleChange}
                    />
                    <span>{ans}</span>
                  </label>
                );
              })}
            {isCorrectAnswer && (
              <>
                <p className="correct animate__animated animate__fadeInDown">
                  You are correct Congratulations
                </p>
              </>
            )}
            {isCorrectAnswer === false && (
              <>
                <p className="correct animate__animated animate__fadeInDown">
                  Sorry Wrong Answer
                </p>
                <p className="correct animate__animated animate__fadeInDown animate__delay-1s">
                  The correct answer is {newQuestion.correct_answer}
                </p>
              </>
            )}
          </div>
        </div>
        {isCorrectAnswer && (
          <button
            className="next animate__animated animate__fadeInUp"
            onClick={showNextQuestion}
          >
            Next
          </button>
        )}
        {!isCorrectAnswer && (
          <button
            className="next animate__animated animate__fadeInUp"
            onClick={showNextQuestion}
          >
            Next
          </button>
        )}
        {isCorrectAnswer === "" && (
          <button
            id="check"
            className="container__submit button animate__animated animate__fadeInUp animate__delay-1s"
            onClick={checkAnswer}
          >
            Check Answer
          </button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
