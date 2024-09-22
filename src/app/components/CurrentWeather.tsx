// import Image from "next/image";
import React from "react";

const CurrentWeather = ({ currentWeatherData }) => {
  const temp = currentWeatherData?.data?.main?.temp;
  const name = currentWeatherData?.data?.name;
  const desc = currentWeatherData?.data?.weather[0]?.description;
  const min = currentWeatherData?.data?.main.temp_min;
  const max = currentWeatherData?.data?.main.temp_max;

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
  console.log(currentWeatherData, "ekjdfsk");

  return (
    <div
      style={{ minHeight: 316 }}
      className="flex items-center justify-center m-4 min-w-full bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50 p-8 rounded-3xl shadow-lg"
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
              {currentWeatherData?.data?.sys.country}
            </span>
          </h1>

          <div className="flex items-center justify-center flex-auto">
            <img
              className=" w-auto h-auto"
              src={`http://openweathermap.org/img/wn/${currentWeatherData?.data?.weather[0]?.icon}@2x.png`}
              alt={currentWeatherData?.data?.weather[0]?.description}
            />
            <h2 className="flex flex-wrap text-6xl font-extrabold text-slate-800 mb-4">
              {Math.round(temp)}°C
            </h2>
          </div>

          <p className=" text-lg text-gray-700 capitalize ">
            {desc}
          </p>
          
          <p className="text-gray-900 text-lg mb-6">{formattedDate}</p>

          <div className="flex justify-around text-gray-700">
            <div className="text-center">
              <p className="text-sm">Min Temp</p>
              <p className="text-xl font-bold">{Math.round(min)}°C</p>
            </div>
            <div className="text-center">
              <p className="text-sm">Max Temp</p>
              <p className="text-xl font-bold">{Math.round(max)}°C</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrentWeather;
