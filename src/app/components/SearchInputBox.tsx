"use client";
import React, { useState } from "react";

const SearchInputBox = (props: any) => {
  const [city, setCity] = useState("New York");
  console.log(props);

  const { onSubmit } = props;

  return (
    <div className="flex mt-4 min-w-full text-center justify-center  bg-gradient-to-r from-yellow-100 via-orange-300 to-yellow-50  p-8 rounded-3xl shadow-lg">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          className="w-full bg-transparent bg-white placeholder:text-slate-400 text-slate-700 text-sm border border-slate-300 rounded-md pl-3 pr-20 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-500 shadow-lg focus:shadow"
          placeholder="Enter your text"
        />
        <button
          onClick={() => {
            onSubmit(city);
          }}
          className="absolute right-1 top-1 rounded bg-slate-800 py-1 px-2.5 border border-transparent text-center text-sm text-white transition-all shadow-sm hover:shadow focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchInputBox;

// <div>
//   <input
//     type="text"
//     value={city}
//     placeholder="Enter your city"
//     onChange={(e) => {
//       setCity(e.target.value);
//     }}
//     className="w-40 "
//   />
//   <button
//     onClick={() => {
//       onSubmit(city);
//     }}
//   >
//     Search
//   </button>
//  </div>
