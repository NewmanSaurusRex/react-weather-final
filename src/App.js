import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Los Angeles" />
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
