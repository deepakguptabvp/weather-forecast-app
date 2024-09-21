import React from "react";

const WeatherForecast = ({weatherForecastData}) => {
  const list = weatherForecastData?.list || [];
  return (
    <div>
      {list?.map((item, index) => {
        return <h1> {item?.main?.temp}</h1>;
      })}
    </div>
  );
};

export default WeatherForecast;