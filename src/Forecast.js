import React, {useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";

import "./Forecast.css";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  
  function handleResponse(response) {
    setForecastData(response.data.daily);
    setLoaded(true);
  }
 
  function load() {
    let apiKey = "a710bd8bd76400c9658ef649d9e81728";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    console.log(forecastData)
    return (
      <div className="Forecast">
        <div className="row">
          {forecastData.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay data={dailyForecast} />
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
    );
    
  } else {
    load();

    return null;
  }
  
}