import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }
  console.log(props);

  let apiKey = "a710bd8bd76400c9658ef649d9e81728";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Forecast">
      <div className="row">
        <div className="col">
          <div className="ForecastDay">Tuesday</div>
          <div className="ForecastTemperature">
            <span className="ForecastTempMax">°</span>
            <span className="ForecastTempMin">°</span>
          </div>
          <WeatherIcon code="01d" size={36} />
        </div>
      </div>
    </div>
  );
}