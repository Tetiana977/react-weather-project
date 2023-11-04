import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}° `;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
  return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div className="WeatherForecastDay">
      <div className="ForecastDay">{day()}</div>
      <div className="ForecastTemperature">
        <span className="ForecastTempMax">{maxTemperature()}</span>
        <span className="ForecastTempMin">{minTemperature()}</span>
      </div>
      <WeatherIcon code={props.data.weather[0].icon} size={36} />
    </div>
  );
}