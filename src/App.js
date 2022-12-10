
import './App.css';
import React from 'react';
import QuizNavBar from "./QuizNavBar";
import { questions } from "./dataModel";

function App() {
  return (
    <div className="App">
     <QuizNavBar questions={questions} />;
    </div>
  );
}

export default App;
