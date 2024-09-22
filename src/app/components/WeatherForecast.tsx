import React from "react";
import { getDayFromTimestamp, getFiveDayForecast } from "../utils/utility";

const WeatherForecast = ({ weatherForecastData }) => {
  const list = getFiveDayForecast(weatherForecastData?.data?.list || []);

  return (
    <div className="flex flex-col items-center justify-center p-8 bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50 min-w-full">
      <h1 className="sm:text-3xl lg:text-xl font-bold text-gray-700 rounded-full px-5 py-3 bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-100 shadow-lg">
        5-Day Weather Forecast
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
        {list.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <h2 className="text-2xl font-semibold text-black-700">
              {getDayFromTimestamp(item?.dt)}
            </h2>
            <img
              className="w-16 h-16 my-3"
              src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
              alt={item?.weather[0]?.description}
            />
            <h3 className="text-base font-semibold text-gray-600">
              {item?.weather[0]?.description.toUpperCase()}
            </h3>
            <div className="text-xl font-medium text-blue-600 mt-2">
              Temp: {item?.main?.temp}°C
            </div>
            <div className="text-md text-gray-500">
              Max/Min: {item?.main?.temp_max}°C / {item?.main?.temp_min}°C
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherForecast;
