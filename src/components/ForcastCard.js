import React from 'react';

const ForecastCard = ({ day, highTemp, lowTemp, icon, condition, unit }) => {
  const iconUrl = `http://openweathermap.org/img/wn/${icon}.png`;
  const unitSymbol = unit === 'metric' ? '°C' : '°F';

  return (
    <div className="forecast-card">
      <h3>{day}</h3>
      <p> {Math.round(highTemp)}{unitSymbol}</p>
      <img src={iconUrl} alt={condition} />
      <p>{condition}</p>
      <p> {Math.round(lowTemp)}{unitSymbol}</p>
    </div>
  );
};

export default ForecastCard;
