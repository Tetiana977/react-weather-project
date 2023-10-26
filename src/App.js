import React from "react";
import Header from "./Header";
import Weather from "./Weather";
import Footer from "./Footer";

import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Header />
          <Weather defaultCity="Kharkiv" />
        </div>
        <Footer />
      </div>
    </div>
  );
}
