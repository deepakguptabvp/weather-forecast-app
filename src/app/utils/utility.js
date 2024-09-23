export const getFiveDayForecast = (forecastData) => {
  const dailyForecast = {};

  // Get today's date and format it as YYYY-MM-DD
  const today = new Date();
  const todayString = today.toISOString().split("T")[0];

  // Get tomorrow's date
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const tomorrowString = tomorrow.toISOString().split("T")[0]; // Format as YYYY-MM-DD

  // Loop through the forecast data
  forecastData.forEach((entry) => {
    // Extract the date part from dt_txt (YYYY-MM-DD)
    const forecastDateString = entry.dt_txt.split(" ")[0];

    // Only consider forecast entries starting from tomorrow
    if (forecastDateString >= tomorrowString) {
      // If no forecast for this day or if the current entry is closer to 12:00 PM, store it
      if (
        !dailyForecast[forecastDateString] ||
        Math.abs(new Date(entry.dt_txt).getHours() - 12) <
          Math.abs(
            new Date(dailyForecast[forecastDateString].dt_txt).getHours() - 12
          )
      ) {
        dailyForecast[forecastDateString] = entry;
      }
    }
  });

  // Convert the object to an array and return only the first 5 days
  const fiveDayForecast = Object.values(dailyForecast).slice(0, 5);
  return fiveDayForecast;
};

export const getDayFromTimestamp = (timestamp) => {
  const dateObj = new Date(timestamp * 1000);
  const dayOfWeek = dateObj.getDay();
  const daysMap = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  return daysMap[dayOfWeek];
};

export const celsiusToFahrenheit = (celsius) => {
  return (celsius * 9) / 5 + 32;
};
