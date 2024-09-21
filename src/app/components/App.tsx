"use client";
import React, { useState } from "react";
import SearchInputBox from "./SearchInputBox";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState(null);
  const [weatherForecastData, setweatherForecastData] = useState(null);
  //   console.log(city,"helloo");

  const handleSubmit = (city: any) => {
    try {
      const API_KEY = "776ee648de6a5eb986f140c70c3eb660";
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((currentWeatherResponse) => {
          console.log("currentWeatherResponse ", currentWeatherResponse);
          setCurrentWeatherData(currentWeatherResponse);
        });

      const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=5&appid=${API_KEY}`;
      fetch(weatherForecastUrl)
        .then((response) => response.json())
        .then((weatherForecastResponse) => {
          console.log("weatherForecastResponse ", weatherForecastResponse);
          setweatherForecastData(weatherForecastResponse);
        });
    } catch (error) {
      console.error("Error", error);
    }
    console.log("submit", city);
  };

  console.log("helloo", currentWeatherData, weatherForecastData);
  return (
    <div>
      <SearchInputBox onSubmit={handleSubmit} />
      <CurrentWeather currentWeatherData={currentWeatherData} />
      <WeatherForecast weatherForecastData={weatherForecastData} />
    </div>
  );
};

export default App;
