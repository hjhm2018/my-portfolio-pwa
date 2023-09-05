import React, { useState } from 'react';

import {
  RiTempHotLine,
  RiTempColdLine,
  RiCelsiusLine,
  RiCommunityLine,
  RiBlazeLine,
  RiTempHotFill,
} from "react-icons/ri";

import "../App.css";

const Weather = () => {

  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({})
  const [show, setShow] = useState(false)

  const getWeather = async () => {

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WeatherApiKey}`);
    const response = await data.json();

    setWeatherData(response);
    setShow(true);
  }

  return (
    <div className="text-center">
      <h1 className="text-center bg-dark text-light p-2 rounded sticky-top col-10 mx-auto mt-2 mb-2 title">
        <span role="img" aria-label="sun emoji">
          &#127774;
        </span>{" "}
        Weather App{" "}
        <span role="img" aria-label="hurricane emoji">
          &#127744;
        </span>{" "}
      </h1>
      <div className="mb-4">
        <input
          className="p-2 mt-5 text-center"
          type="text"
          name="city"
          maxLength="50"
          onChange={(e) => setCity(e.target.value.trim())}
          placeholder="Enter city name"
        />
        <button
          className="btn btn-primary p-2 ml-1"
          onClick={() => getWeather()}
          disabled={city === ''}
        >
          Search
        </button>
      </div>

      {weatherData && show ? (
        <div className="bg-secondary text-light col-10 col-md-6 col-lg-3 mx-auto rounded p-3">
          <p className='text-capitalize'>
            <span className="font-weight-bold">
              <RiCommunityLine /> &nbsp; City:{" "}
            </span>{" "}
            {weatherData.name}
          </p>
          <p>
            <span className="font-weight-bold">
              <RiTempHotFill />
              &nbsp; Temperature:{" "}
            </span>{" "}
            {(weatherData.main.temp - 273.15).toFixed(2)}&nbsp;
            <RiCelsiusLine />
          </p>
          <p>
            <span className="font-weight-bold">
              <RiBlazeLine />
              &nbsp; Feels like:{" "}
            </span>{" "}
            {(weatherData.main.feels_like - 273.15).toFixed(2)}&nbsp;
            <RiCelsiusLine />
          </p>
          <p>
            <span className="font-weight-bold">
              <RiTempHotLine /> &nbsp;Max. Temp:{" "}
            </span>{" "}
            {(weatherData.main.temp_max - 273.15).toFixed(2)}&nbsp;
            <RiCelsiusLine />
          </p>
          <p>
            <span className="font-weight-bold">
              <RiTempColdLine /> &nbsp;Min. Temp:{" "}
            </span>
            {(weatherData.main.temp_min - 273.15).toFixed(2)}&nbsp;
            <RiCelsiusLine />
          </p>
        </div>
      ) : (
        "Enter City Name"
      )}
    </div>
  )
}

export default Weather