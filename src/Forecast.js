import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";

import "./Forecast.css";

export default function Forecast() {
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
          <div className="col">
            <div className="ForecastDay">Tuesday</div>
            <div className="ForecastTemperature">
              <span className="ForecastTempMax">°</span>
              <span className="ForecastTempMin">°</span>
            </div>
            <WeatherIcon code="01d" size={36} />
          </div>
          <div className="col">
            <div className="ForecastDay">Tuesday</div>
            <div className="ForecastTemperature">
              <span className="ForecastTempMax">°</span>
              <span className="ForecastTempMin">°</span>
            </div>
            <WeatherIcon code="01d" size={36} />
          </div>
          <div className="col">
            <div className="ForecastDay">Tuesday</div>
            <div className="ForecastTemperature">
              <span className="ForecastTempMax">°</span>
              <span className="ForecastTempMin">°</span>
            </div>
            <WeatherIcon code="01d" size={36} />
          </div>
          <div className="col">
            <div className="ForecastDay">Tuesday</div>
            <div className="ForecastTemperature">
              <span className="ForecastTempMax">°</span>
              <span className="ForecastTempMin">°</span>
            </div>
            <WeatherIcon code="01d" size={36} />
          </div>
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