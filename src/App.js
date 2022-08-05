import * as React from "react";
import { useState } from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";

function App() {
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  function categoryChange(e) {
    const { value } = e.target;
    setCategory(value);
  }
  function handleDifficulty(e){
    const {value} = e.target
    setDifficulty(value)
  }
  return (
    <>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Main
                category={category}
                categoryChange={categoryChange}
                difficulty={difficulty}
                handleDifficulty={handleDifficulty}
              />
            }
          />
          <Route
            path="/quiz"
            element={<Quiz category={category} difficulty={difficulty} />}
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
