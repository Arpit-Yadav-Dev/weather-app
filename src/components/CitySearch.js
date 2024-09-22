import React from "react";

const CitySearch = ({ onCitySelect, toggleUnit, unit }) => {
  const cityList = [
    "New York",
    "Los Angeles",
    "Chicago",
    "San Francisco",
    "Boston",
  ];

  return (
    <div className="city-search">
      <select onChange={(e) => onCitySelect(e.target.value)} defaultValue="New York">
        <option value="" disabled>
          🔍 Select a city...
        </option>
        {cityList.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
      <button onClick={toggleUnit}>{unit === "metric" ? "°F" : "°C"}</button>
    </div>
  );
};

export default CitySearch;
