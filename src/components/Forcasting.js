import React, { useEffect, useState } from 'react';
import { fetchForcasting } from '../api/weatherApi';
import ForecastCard from './ForcastCard';

const Forecasting = ({ city ,unit}) => {
  const [forecastData, setForecastData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getForecast = async () => {
      try {
        const data = await fetchForcasting(city,unit);
        const dailyForecast = data.list.filter((_, index) => index % 8 === 0); 
        setForecastData(dailyForecast);
      } catch (err) {
        setError(err.message);
      }
    };

    getForecast();
  }, [city,unit]);

  // console.log(forecastData)

  if (error) return <div>{error}</div>;
  if (forecastData.length === 0) return <div>Loading forecast...</div>;

  return (
    <div className="forecast-container">
      {forecastData.map((dayData, index) => {
        const date = new Date(dayData.dt * 1000);
        const dayOfWeek = date.toLocaleString('en-US', { weekday: 'long' });
        const highTemp = dayData.main.temp_max;
        const lowTemp = dayData.main.temp_min;
        const weatherIcon = dayData.weather[0].icon;
        const weatherCondition = dayData.weather[0].description;

        return (
          <ForecastCard
            key={index}
            day={dayOfWeek}
            highTemp={highTemp}
            lowTemp={lowTemp}
            icon={weatherIcon}
            condition={weatherCondition}
            unit={unit}
          />
        );
      })}
    </div>
  );
};

export default Forecasting;
