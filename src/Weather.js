import React from "react";
import axios from "axios";
import { Audio } from "react-loader-spinner";
import { Circles } from "react-loader-spinner";

export default function Weather() {
  function displayWeather(response) {
    alert(`the wether in ${city} is ${response.data.main.temp} deg `);
  }

  let apiKey = "094780c710fa4efd669f0df8c3991927";
  let metric = "metric";
  let city = "urmia";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}`;
  axios.get(apiUrl).then(displayWeather);

  return (
    <div>
      <h1>jjj </h1>
      <Audio
        height="80"
        width="80"
        radius="9"
        color="blue"
        ariaLabel="loading"
      />
    </div>
  );
}
