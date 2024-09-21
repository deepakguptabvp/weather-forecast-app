"use client";
import React, { useState } from "react";

const SearchInputBox = (props: any) => {
  const [city, setCity] = useState("");
  console.log(props);

  const { onSubmit } = props;

  return (
    <div>
      SearchInputBox
      <input
        type="text"
        value={city}
        placeholder="Enter your city"
        onChange={(e) => {
          setCity(e.target.value);
        }}
      />
      <button
        onClick={() => {
          onSubmit(city);
        }}
      >
        Search
      </button>
    </div>
  );
};

export default SearchInputBox;
