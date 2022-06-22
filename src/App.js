import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>React Weather Application - Final</h1>
        <footer>
          {" "}
          This project was coded by{" "}
          <a href="https://mnewman.io" target="_blank" rel="noreferrer">
            MNewman
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/NewmanSaurusRex/react-weather-final"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>
          {""} on github.
        </footer>
      </div>
    </div>
  );
}
