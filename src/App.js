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
          <a
            href="https://mnewman.io"
            target="_blank"
            rel="noopener noreferrer"
          >
            MNewman
          </a>{" "}
          and is {""}
          <a
            href="https://github.com/NewmanSaurusRex/react-weather-final"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-sourced
          </a>
          {""} on Github and hosted on{" "}
          <a
            href="https://resilient-speculoos-5d9a94.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
