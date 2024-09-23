// import Image from "next/image";
import React from "react";
import { celsiusToFahrenheit } from "../utils/utility";

const CurrentWeather = ({ currentWeatherData, unit }) => {
  const name = currentWeatherData?.data?.name;
  const icon = currentWeatherData?.data?.weather?.[0]?.icon;
  const desc = currentWeatherData?.data?.weather?.[0]?.description;
  const temp =
    unit === "metric"
      ? currentWeatherData?.data?.main?.temp
      : celsiusToFahrenheit(currentWeatherData?.data?.main?.temp);
  const min =
    unit === "metric"
      ? currentWeatherData?.data?.main?.temp_min
      : celsiusToFahrenheit(currentWeatherData?.data?.main?.temp_min);
  const max =
    unit === "metric"
      ? currentWeatherData?.data?.main?.temp_max
      : celsiusToFahrenheit(currentWeatherData?.data?.main?.temp_max);

  const displayUnit = unit === "metric" ? "°C" : "°F";

  // const formattedDate = new Date(date * 1000).toLocaleDateString(); // Formatting the date
  const date = new Date();
  const weekday = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];

  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = weekday[date.getDay()];
  let month = monthName[date.getMonth()];
  const formattedDate = `${day}, ${month} ${date.getDate()} `;


  return (
    <div
      style={{ minHeight: 344 }}
      className="flex items-center justify-center m-4 p-8 rounded-3xl shadow-lg min-w-full bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50 "
    >
      {currentWeatherData?.loading ? (
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Loading...
        </h1>
      ) : currentWeatherData?.error ? (
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          {currentWeatherData?.error}
        </h1>
      ) : (
        <div className="border-gray-950  text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {name},{" "}
            <span className="text-gray-900">
              {currentWeatherData?.data?.sys?.country}
            </span>
          </h1>

          <div className="flex items-center justify-center flex-auto">
            <img
              className=" w-auto h-auto"
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt={desc}
            />
            <h2 className="flex flex-wrap text-6xl font-extrabold text-slate-800 mb-4">
              {Math.round(temp)}
              {displayUnit}
            </h2>
          </div>

          <p className=" text-lg text-gray-700 capitalize ">{desc}</p>

          <p className="text-gray-900 text-lg mb-6">{formattedDate}</p>

          <div className="flex justify-around text-gray-700">
            <div className="text-center">
              <p className="text-sm">Min Temp</p>
              <p className="text-xl font-bold">
                {Math.round(min)}
                {displayUnit}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm">Max Temp</p>
              <p className="text-xl font-bold">
                {Math.round(max)}
                {displayUnit}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
