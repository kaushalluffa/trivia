// import { useState } from "react";
import { Link } from "react-router-dom";
import { categoriesArray, difficultyLevel } from "./data/data";

import "./main.css";
const Main = (props) => {
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
        <div className="options animate__animated animate__fadeInDown">
          <label htmlFor="categories">Choose a category:</label>
          <br />
          <select
            name="categories"
            id="categories"
            onChange={props.categoryChange}
          >
            <option className="option" value="">
              --Choose OR Random--
            </option>
            {categoriesArray.map((category, idx) => {
              return (
                <option className="option" value={idx + 9} key={idx + 9}>
                  {category}
                </option>
              );
            })}
          </select>
        </div>
        <div className="difficulty animate__animated animate__fadeInDown">
          <label htmlFor="difficulty">Choose a Difficulty Level:</label>
          <br />
          <select
            name="difficulty"
            id="difficulty"
            onChange={props.handleDifficulty}
          >
            <option className="option" value="">
              --Choose OR Random--
            </option>
            {difficultyLevel.map((difficulty, idx) => {
              return (
                <option className="option" value={difficulty} key={idx}>
                  {difficulty}
                </option>
              );
            })}
          </select>
        </div>
        <div className="note animate__animated animate__fadeInDown">
          <p>
            Note: There may be some categories that do not have some difficulty
            level but you will still get the question according the next
            difficulty level that is available
          </p>
        </div>
        <div className="quiz__button--main animate__animated animate__fadeInRight animate__delay-1s">
          <Link to="/quiz">
            <button className="quizbutton--main button">Take Quiz!</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Main;
