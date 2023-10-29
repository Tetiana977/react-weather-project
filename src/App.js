import React from "react";
import CitySearch from "./CitySearch";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <CitySearch defaultCity = "Kharkiv" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
