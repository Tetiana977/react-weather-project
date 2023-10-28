import React from "react";
import CurrentDate from "./CurrentDate";
//import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  return (
    <div className="Weather">
      <div className="row">
        <div className="col-6 main">
          <ul>
            <li>
              <h1 id="city">{props.data.city}</h1>
            </li>
            <li>
              Last updated:{" "}
              <span id="time">
                <CurrentDate date={props.data.date} />
              </span>
            </li>
            <li className="text-capitalize" id="description">
              {props.data.description}
            </li>
            <li>
              <img
                src={props.data.iconUrl}
                alt={props.data.description}
                id="icon"
              />
            </li>
          </ul>
        </div>
        <div className="col-6 main">
          <ul>
            <li>
              <strong class="me-2" id="current-temperature">
                {Math.round(props.data.temperature)}
              </strong>
              <span className="unit">
                <a className="activ" id="celsius" href="/">
                  °C
                </a>{" "}
                |{" "}
                <a id="fahrenheit" href="/">
                  °F
                </a>
              </span>
            </li>
            <li>
              <span id="temperature-max"></span>
              <span id="temperature-min"></span>
            </li>
            <li>
              Humidity: <span id="humidity">{props.data.humidity}</span>%
            </li>
            <li>
              Wind: <span id="wind">{props.data.wind}</span> m/h
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 