"use client";
import React, { useEffect, useState } from "react";
import SearchInputBox from "./SearchInputBox";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import { error, log } from "console";

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    loading: false,
    error: "",
    data: null,
  });
  const [weatherForecastData, setweatherForecastData] = useState({
    loading: false,
    error: "",
    data: null,
  });

  useEffect(() => {
    handleSubmit("New York");
    console.log("wde");
    
  }, []);

  const handleSubmit = (city: any) => {
    try {
      const API_KEY = "776ee648de6a5eb986f140c70c3eb660";
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      setCurrentWeatherData({
        ...currentWeatherData,
        loading: true,
      });
      fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((currentWeatherResponse) => {
          console.log("currentWeatherResponse ", currentWeatherResponse);
          setCurrentWeatherData({
            ...currentWeatherData,
            data: currentWeatherResponse,
          });
        })
        .catch((error) => {
          console.error(error);
          setCurrentWeatherData({
            ...currentWeatherData,
            error: error?.message || "Current weather API failed to fetch data",
          });
        })
        .finally(() => {
          setCurrentWeatherData({
            ...currentWeatherData,
            loading: false,
          });
        });

      // api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
      const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&cnt=40&appid=${API_KEY}`;
      setweatherForecastData({
        ...weatherForecastData,
        loading: true,
      });
      fetch(weatherForecastUrl)
        .then((response) => response.json())
        .then((weatherForecastResponse) => {
          console.log("weatherForecastResponse ", weatherForecastResponse);
          setweatherForecastData({
            ...weatherForecastData,
            data: weatherForecastResponse,
          });
        })
        .catch((error) => {
          console.error(error);
          setweatherForecastData({
            ...weatherForecastData,
            error:
              error?.message || "Forecast weather API failed to fetch data",
          });
        })
        .finally(() => {
          setweatherForecastData({
            ...weatherForecastData,
            loading: false,
          });
        });
    } catch (error) {
      console.error("Error", error);
    }
    console.log("submit", city);
  };

  console.log("helloo2222", currentWeatherData, weatherForecastData);


  return (
    <div className="flex flex-col items-center justify-center ">
      <h1 className="font-bold text-4xl mt-5">Weather-Forecast</h1>
      <SearchInputBox onSubmit={handleSubmit} />

      <CurrentWeather currentWeatherData={currentWeatherData} />
      <WeatherForecast weatherForecastData={weatherForecastData} />
    </div>
  );
};

export default App;
