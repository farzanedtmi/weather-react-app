import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        {" "}
        <div className="row">
          <div className="col-9">
            <input
              type={"search"}
              placeholder="Search for a city... "
              className="form-control"
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>{" "}
      <ul>
        <h1>Hamedan</h1>
        <li>Friday 12:00 AM</li>
        <li>partly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png "
            alt="cloudy"
          ></img>
          10 °C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 0% </li>
            <li>Humidity: 26%</li>
            <li>Wind: 8 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
