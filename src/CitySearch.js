import React, { useState } from "react";
//import CurrentDate from "./CurrentDate";
import axios from "axios";

import Weather from "./Weather";
import Forecast from "./Forecast"

import "./CitySearch.css";
import "./styles.css";

export default function CitySearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    //console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon
    });
  }

  /*function search() {
    const apiKey = "7633347349ec94a368e4a15d93744b30";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      
    axios.get(apiUrl).then(handleResponse);
  }*/

  function search() {
    const apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search(city);
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
 
      <div className="CitySearch">
        <header>
          <form id="city-search" onSubmit={handleSubmit}>
            <input
              id="user-city"
              className="city"
              type="text"
              placeholder="Type city"
              onChange={handleCityChange}
            />
            <input
              id="button-search"
              className="button"
              type="submit"
              value="Search"
            />
            <input
              id="current-button"
              className="button"
              type="submit"
              value="Current"
            />
          </form>
        </header>
        <Weather data={weatherData} />
        <Forecast />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}