import React, { useState } from "react";
//import CurrentDate from "./CurrentDate";
import axios from "axios";

import Weather from "./Weather";

import "./CitySearch.css";

export default function CitySearch() {
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
      iconUrl: "https://openweathermap.org/img/wn/02d@2x.png",
      /*icon: data.weather[0].icon*/
    });
  }

  function search() {
    const apiKey = "b47fdf6445cd8b64ab889be77dbe56d4";
    let apiUrl =
      "https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric";
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
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}