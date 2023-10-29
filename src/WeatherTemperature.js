import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const [unit, setUnit] = useState("celsius");

    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    function convertToCelsius(event) {
      event.preventDefault();
      setUnit("celsius");
    }

    function fahrenheit() {
        return (props.celsius * 9) / 5 + 32;
    }

    if (unit === "celsius") {
        return (
          <div className="WeatherTemperature">
            <strong class="me-2" id="current-temperature">
              {Math.round(props.celsius)}
            </strong>
            <span className="unit">
                °C {" "}
                |{" "}
                <a className="activ" id="fahrenheit" href="/" onClick={convertToFahrenheit}>
                °F
                </a>
            </span>
          </div>
        );
    } else {
        return (
          <div className="WeatherTemperature">
            <strong class="me-2" id="current-temperature">
              {Math.round(fahrenheit())}
            </strong>
            <span className="unit">
              <a className="activ" id="celsius" href="/" onClick={convertToCelsius}>
                °C
              </a>{" "}
              |{" "} °F
            </span>
          </div>
        );
    }  
}