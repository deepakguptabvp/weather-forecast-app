"use client";
import React, { useEffect, useState } from "react";
import SearchInputBox from "./SearchInputBox";
import CurrentWeather from "./CurrentWeather";
import WeatherForecast from "./WeatherForecast";
import ToggleTemp from "./ToggleTemp";

const App = () => {
  const [currentWeatherData, setCurrentWeatherData] = useState({
    loading: true,
    error: "",
    data: null,
  });
  const [weatherForecastData, setWeatherForecastData] = useState({
    loading: true,
    error: "",
    data: null,
  });

  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    handleSubmit("New York");
  }, []);

  const handleSubmit = (city) => {
    try {
      const API_KEY = "776ee648de6a5eb986f140c70c3eb660";
      const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
      setCurrentWeatherData((prevState) => ({
        ...prevState,
        loading: true,
      }));
      fetch(currentWeatherUrl)
        .then((response) => response.json())
        .then((currentWeatherResponse) => {
          console.log("currentWeatherResponse ", currentWeatherResponse);
          if (currentWeatherResponse?.cod === 200) {
            setCurrentWeatherData((prevState) => ({
              ...prevState,
              data: currentWeatherResponse,
              error: "",
            }));
          } else {
            setCurrentWeatherData((prevState) => ({
              ...prevState,
              data: null,
              error:
                currentWeatherResponse?.message ||
                "Current Weather API failed...",
            }));
          }
        })
        .catch((error) => {
          console.error(error);
          setCurrentWeatherData((prevState) => ({
            ...prevState,
            error: error?.message || "Current weather API failed to fetch data",
          }));
        })
        .finally(() => {
          setCurrentWeatherData((prevState) => ({
            ...prevState,
            loading: false,
          }));
        });
      // api.openweathermap.org/data/2.5/forecast/daily?q=London&units=metric&cnt=7&appid={API key}
      const weatherForecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`;

      setWeatherForecastData((prevState) => ({
        ...prevState,
        loading: true,
      }));

      fetch(weatherForecastUrl)
        .then((response) => response.json())
        .then((weatherForecastResponse) => {
          console.log("weatherForecastResponse ", weatherForecastResponse);
          if (weatherForecastResponse?.cod === "200") {
            setWeatherForecastData((prevState) => ({
              ...prevState,
              data: weatherForecastResponse,
              error: "",
            }));
          } else {
            setWeatherForecastData((prevState) => ({
              ...prevState,
              data: null,
              error:
                weatherForecastResponse?.message ||
                "Weather Forecast API failed...",
            }));
          }
        })
        .catch((error) => {
          setWeatherForecastData((prevState) => ({
            ...prevState,
            error:
              error?.message || "Forecast weather API failed to fetch data",
          }));
        })
        .finally(() => {
          setWeatherForecastData((prevState) => ({
            ...prevState,
            loading: false,
          }));
        });
    } catch (error) {
      console.error("Error", error);
    }
    console.log("submit", city);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="sm:text-3xl lg:text-3xl m-4 font-bold text-gray-700 rounded-full px-5 py-3 bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-100 shadow-lg">
        Weather Forecast App
      </h1>
      <div className="flex justify-center flex-col items-center p-8 rounded-3xl shadow-lg min-w-full bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50">
        <SearchInputBox onSubmit={handleSubmit} />
        <ToggleTemp unit={unit} setUnit={setUnit} />
      </div>
      <CurrentWeather unit={unit} currentWeatherData={currentWeatherData} />
      <WeatherForecast unit={unit} weatherForecastData={weatherForecastData} />
    </div>
  );
};

export default App;
