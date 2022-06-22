import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <p>Hello from Weather</p>
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a City"
              className="form-control"
              autoFocus="on"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-primary w-100"
            />
          </div>
        </div>
      </form>
      <h1>Los Angeles</h1>
      <ul>
        <li>Tuesday, June 21</li>
        <li>Sunny</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://media.istockphoto.com/vectors/sun-vector-icon-cute-yellow-sun-with-face-emoji-summer-emoticon-vector-id1142670098?k=20&m=1142670098&s=612x612&w=0&h=jRNzskWzMIUMV6I3RjFWQW7mzGfZxwmtN9xHu7VWo-c="
              alt="smiling sun emoji"
              className="img-fluid float-left"
            ></img>
            <div className="float-left">
              <span className="temperature"> 18</span>
              <span className="unit">°C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 80%</li>
            <li>Wind: 6km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
