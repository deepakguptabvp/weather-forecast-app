import React from "react";

const CurrentWeather = ({ currentWeatherData }) => {
  const temp = currentWeatherData?.main?.temp;
  const name = currentWeatherData?.name;
  return (
    <div>
      <h1>{temp}</h1>
      <h1>{name}</h1>
    </div>
  );
};

export default CurrentWeather;
