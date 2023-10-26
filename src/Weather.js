import React, { useState } from "react";
import CurrentDate from "./CurrentDate";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      /*icon: data.weather[0].icon*/
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="row">
          <div className="col-6 main">
            <ul>
              <li>
                <h1 id="city">{weatherData.city}</h1>
              </li>
              <li>
                Last updated:{" "}
                <span id="time">
                  <CurrentDate date={weatherData.date} />
                </span>
              </li>
              <li className="text-capitalize" id="description">
                {weatherData.description}
              </li>
              <li>
                <img
                  src={weatherData.iconUrl}
                  alt={weatherData.description}
                  id="icon"
                />
              </li>
            </ul>
          </div>
          <div className="col-6 main">
            <ul>
              <li>
                <strong class="me-2" id="current-temperature">
                  {weatherData.temperature}
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
                Humidity: <span id="humidity">{weatherData.humidity}</span>%
              </li>
              <li>
                Wind: <span id="wind">{weatherData.wind}</span> m/h
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "b47fdf6445cd8b64ab889be77dbe56d4";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric";
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";
  }
}
