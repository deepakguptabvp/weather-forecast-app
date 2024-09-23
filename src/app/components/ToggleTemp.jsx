import React from "react";

const ToggleTemp = ({ unit, setUnit }) => {
  return (
    <div style={{ right: 40 }} className=" flex justify-center mt-8 ">
      <button
        onClick={() => setUnit(unit === "metric" ? "imperial" : "metric")}
        className=" bg-amber-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105  "
      >
        {unit === "metric"
          ? "Switch to Fahrenheit (°F)"
          : "Switch to Celsius (°C)"}
      </button>
    </div>
  );
};

export default ToggleTemp;
