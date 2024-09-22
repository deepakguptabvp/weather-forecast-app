export const getFiveDayForecast = (forecastData) => {
    const dailyForecast = {};

    // Get today's date
    const today = new Date();

    // Loop through the forecast data
    forecastData.forEach((entry) => {
        // Convert dt_txt to a JavaScript Date object
        const forecastDate = new Date(entry.dt_txt);

        // Check if the forecast date is after today
        if (forecastDate > today) {
            const dateKey = forecastDate.toISOString().split("T")[0]; // Extract the date part only (YYYY-MM-DD)

            // Select one forecast per day (e.g., at 12:00 PM)
            if (!dailyForecast[dateKey] && forecastDate.getHours() === 12) {
                dailyForecast[dateKey] = entry;
            }
        }
    });
    // Convert the object to an array and return only the first 5 days
    const fiveDayForecast = Object.values(dailyForecast).slice(0, 5);
    return fiveDayForecast;
}

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
}