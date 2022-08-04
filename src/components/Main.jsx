import {  Link } from "react-router-dom";

import "./main.css";
const Main = () => {
  return (
    <>
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
          <Link to="/quiz">
            <button
              className="quizbutton--main button"
            >
              Take Quiz!
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Main;
