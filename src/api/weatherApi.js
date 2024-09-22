import axios from "axios";

// will add this in .env file
const key = "7b491c9fd16797b377ba8c4ea5e1e10e";
const baseUrl = "https://api.openweathermap.org/data/2.5/weather";
const forecaseUrl = "https://api.openweathermap.org/data/2.5/forecast";

export const fetchWeatherData = async (city, unit) => {
  try {
    const response = await axios.get(baseUrl, {
      params: {
        q: city,
        units: unit,
        appid: key,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch weather data");
  }
};

// Five Day forcasting fnction
export const fetchForcasting = async (city, unit) => {
  try {
    const response = await axios.get(forecaseUrl, {
      params: {
        q: city,
        units: unit,
        appid: key,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch forecast");
  }
};
