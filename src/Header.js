import React from "react";
import axios from "axios";

import "./Header.css";

export default function Header() {
  return (
    <div className="Header">
      <header>
        <form id="city-search">
          <input
            id="user-city"
            className="city"
            type="text"
            placeholder="Type city"
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
    </div>
  );
}

