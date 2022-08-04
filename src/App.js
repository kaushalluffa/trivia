import * as React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Quiz from "./components/Quiz";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
