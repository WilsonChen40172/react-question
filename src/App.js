
import "react-datepicker/dist/react-datepicker.css";
import React from "react";
import './App.css';
import { Link } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <div className="link">
        <Link to={`/question1`}>Question1</Link>
      </div>
      <div className="link">
        <Link to={`/question2task1`}>Question2 Task1</Link>
      </div>
      <div className="link">
        <Link to={`/react-question2/index.html`}>Question2 Task2</Link>
      </div>



    </div>
  );
}

export default App;
