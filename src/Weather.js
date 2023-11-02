import React from "react";
import CurrentDate from "./CurrentDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
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
              <WeatherIcon
                code={props.data.icon} size={55}
              />
            </li>
          </ul>
        </div>
        <div className="col-6 main">
          <ul>
            <li>
              <WeatherTemperature celsius={props.data.temperature} />
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