import React from "react";
import {
  celsiusToFahrenheit,
  getDayFromTimestamp,
  getFiveDayForecast,
} from "../utils/utility";

const WeatherForecast = ({ weatherForecastData, unit }) => {
  const list = getFiveDayForecast(weatherForecastData?.data?.list || []);
  const displayUnit = unit === "metric" ? "°C" : "°F";

  return (
    <div className="flex flex-col rounded-3xl items-center justify-center p-8 bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50 min-w-full">
      <h1 className="sm:text-3xl lg:text-xl font-bold text-gray-700 rounded-full px-5 py-3 bg-gradient-to-r from-yellow-100 via-orange-200 to-yellow-100 shadow-lg">
        5-Day Weather Forecast
      </h1>

      {weatherForecastData?.loading ? (
        <h1
          style={{ minHeight: 276 }}
          className="text-3xl font-bold text-gray-800 mb-4 text-center mt-28"
        >
          Loading...
        </h1>
      ) : weatherForecastData?.error ? (
        <h1
          style={{ minHeight: 276 }}
          className="text-3xl font-bold text-gray-800 mb-4 text-center mt-28"
        >
          {weatherForecastData?.error}
        </h1>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-8">
          {list.map((item, index) => {
            const min =
              unit === "metric"
                ? item?.main?.temp_min
                : celsiusToFahrenheit(item?.main?.temp_min);
            const max =
              unit === "metric"
                ? item?.main?.temp_max
                : celsiusToFahrenheit(item?.main?.temp_max);
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center justify-center bg-white p-20 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h2 className="text-5xl font-semibold text-black-700">
                  {getDayFromTimestamp(item?.dt)}
                </h2>
                <img
                  className="w-24 h-24 "
                  src={`http://openweathermap.org/img/wn/${item?.weather[0]?.icon}@2x.png`}
                  alt={item?.weather[0]?.description}
                />
                <h3 className="text-xl font-semibold text-gray-600 capitalize">
                  {item?.weather[0]?.description}
                </h3>

                <div className="text-md font-semibold text-gray-500">
                  Min: {Math.round(min)}
                  {displayUnit}
                </div>
                <div className="text-md font-semibold text-gray-500">
                  Max: {Math.round(max)}
                  {displayUnit}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default WeatherForecast;
