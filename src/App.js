import "./App.css";
import React, { useState, useEffect, 
  // Suspense,
   lazy } from 'react'
import CitySearch from "./components/CitySearch";
import PullToRefresh from 'react-pull-to-refresh';

const WeatherDetails  = lazy(()=>import('./components/WeatherDetails'))
// import WeatherDetails from "./components/WeatherDetails";
// import Forecasting from "./components/Forcasting";
const Forecasting = lazy(()=>import('./components/Forcasting'))

function App() {
  const [selectedCity, setSelectedCity] = useState(
    localStorage.getItem('lastCity') || 'New York'
  );
  const [unit, setUnit] = useState("metric");

  useEffect(() => {
    // Store the last searched city in localStorage
    localStorage.setItem('lastCity', selectedCity);
  }, [selectedCity]);

  const handleCitySelect = (city) => {
    setSelectedCity(city);
  };

 

  const refreshWeather = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log("Refresh function called");
        alert("Hey, I am working!"); 
        resolve();
      }, 1000);
    });
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

  return (
    
    <PullToRefresh onRefresh={refreshWeather}>
    <div className="App">
      <CitySearch onCitySelect={handleCitySelect} toggleUnit={toggleUnit} unit={unit}  />
      <WeatherDetails city={selectedCity} unit={unit} />
      <Forecasting city={selectedCity} unit={unit}/>
    </div>
    </PullToRefresh>
  );
}

export default App;
