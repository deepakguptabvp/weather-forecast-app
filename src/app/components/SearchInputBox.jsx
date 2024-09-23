"use client";
import React, { useState } from "react";

const SearchInputBox = (props) => {
  const [city, setCity] = useState("New York");

  const { onSubmit } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(city);
  };

  return (
    <div className="flex mt-4 text-center justify-center">
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full bg-transparent bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-500 shadow-lg focus:shadow"
          placeholder="Enter your text"
        />

        <button
          type="submit"
          className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInputBox;
