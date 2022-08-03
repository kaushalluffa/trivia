import { useState, useEffect } from "react";
import Axios from "axios";
import "./main.css";
const Main = () => {
  const [showQuiz, setShowQuiz] = useState(false);
  const [newQuestion, setNewQuestion] = useState({
    question: "",
    correct_answer: "",
    incorrect_answers: [],
    category: "",
    difficulty: "",
  });
  function showQuizFunc() {
    setShowQuiz(true);
  }
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
        incorrect__answers: [...arr],
        difficulty: difficulty,
      });
    });
  }
  useEffect(() => {
    getQuestion();
  }, []);

  /////////////////
//   function checkAnswer() {
//     const container = document.getElementById("container");
//     const checked = document.querySelector(`input[name='option']:checked`);
//     if (checked && checked.value === `${res.data.results[0].correct_answer}`) {
//       const correct = document.createElement("p");
//       setClasses(correct, [
//         "correct",
//         "animate__animated",
//         "animate__fadeInDown",
//       ]);
//       correct.innerText = `You are Correct. Congratulations`;
//       container.removeChild(checkAnsBtn);
//       ans.innerHTML = "";
//       ans.appendChild(correct);
//       const nextBtn = document.createElement("button");
//       setClasses(nextBtn, ["next", "animate__animated", "animate__fadeInUp"]);
//       nextBtn.innerText = "Next";
//       container.appendChild(nextBtn);
//       nextBtn.addEventListener("click", () => {
//         location.reload();
//       });
//     } else {
//       ans.innerHTML = "";
//       const correctAnswer = document.createElement("p");
//       setClasses(correctAnswer, [
//         "correct",
//         "animate__animated",
//         "animate__fadeInUp",
//         "animate__delay-1s",
//       ]);
//       correctAnswer.innerText = `This is the correct answer ${res.data.results[0].correct_answer}`;
//       const wrongAnswer = document.createElement("p");
//       setClasses(wrongAnswer, [
//         "wrong",
//         "animate__animated",
//         "animate__fadeInUp",
//       ]);
//       wrongAnswer.innerText = "Sorry Wrong Answer";
//       ans.appendChild(wrongAnswer);
//       ans.appendChild(correctAnswer);
//       container.removeChild(checkAnsBtn);
//       const nextBtn = document.createElement("button");
//       setClasses(nextBtn, ["next", "animate__animated", "animate__fadeInUp"]);
//       nextBtn.innerText = "Next";
//       container.appendChild(nextBtn);
//       nextBtn.addEventListener("click", () => {
//         location.reload();
//       });
//     }
//   }
  ////////////////
  return (
    <>
      {!showQuiz && (
        <div className="container--main">
          <div className="headings--main animate__animated animate__fadeInDown">
            <h1 className="animate__animated animate__fadeInDown animate__delay-1s">
              Wanna Play?
            </h1>
            <h2 className="animate__animated animate__fadeInDown animate__delay-1s">
              Let's play quiz and gain some knowledge.
            </h2>
          </div>
          <div className="svg--main animate__animated animate__fadeInLeft animate__delay-1s">
            <img src="https://svgur.com/i/jfT.svg" alt="svg" />
          </div>
          <div className="quiz__button--main animate__animated animate__fadeInRight animate__delay-1s">
            <button className="quizbutton--main button" onClick={showQuizFunc}>
              Take Quiz!
            </button>
          </div>
        </div>
      )}
      {showQuiz && (
        <div className="container--quiz" id="container">
          <div className="container__header--quiz">
            <h1 className="animate__animated animate__fadeInDown">
              Play Trivia
            </h1>
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
              {newQuestion.incorrect__answers.map((ans, idx) => {
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
                    />
                    <span>{ans}</span>
                  </label>
                );
              })}
            </div>
          </div>
          <button
            id="check"
            className="container__submit button animate__animated animate__fadeInUp animate__delay-1s"
            // onClick={checkAnswer}
          >
            Check Answer
          </button>
        </div>
      )}
    </>
  );
};
export default Main;
