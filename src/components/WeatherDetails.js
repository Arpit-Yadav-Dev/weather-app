import React, { useEffect, useState } from "react";
import { fetchWeatherData } from "../api/weatherApi";

function WeatherDetails({ city, unit }) {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getWeather = async () => {
      try {
        const res = await fetchWeatherData(city, unit);
        setWeatherData(res);
      } catch (err) {
        setError(err.message);
      }
    };

    getWeather();
  }, [city, unit]);

  if (error) return <div>{error}</div>;
  if (!weatherData)
    return (
      <img src="https://shortpixel.com/img/spinner2.gif" />
    );

  const { name, main, weather } = weatherData;
  const temp = Math.round(main.temp);
  const condition = weather[0].description;
  const icon = `http://openweathermap.org/img/wn/${weather[0].icon}.png`;
  const unitSymbol = unit === "metric" ? "°C" : "°F";

  return (
    <div className="weather-details">
      <div>
        <h2>{name}</h2>
        <h1>
          {" "}
          {temp}
          {unitSymbol}
        </h1>
        <p> {condition}</p>
        <img src={icon} alt="weather icon" />
      </div>
    </div>
  );
}

export default WeatherDetails;
