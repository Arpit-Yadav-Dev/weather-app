# Weather Forecast Application

A responsive weather forecast application that provides current weather conditions and a 5-day forecast. Built using **React.js** and **OpenWeatherMap API** for data retrieval.

**Live Demo**: [Weather App](https://weather-app-amber-six-21.vercel.app/)

## Features

- **Current Weather**: Displays real-time weather data such as temperature, weather conditions, and more.
- **5-Day Forecast**: Shows a detailed weather forecast for the next five days.
- **Offline Detection**: Automatically detects when there is no internet connection and displays a message to inform the user.
- **Responsive Design**: Optimized for both desktop and mobile devices.
- **Temperature Unit Toggle**: Switch between Celsius and Fahrenheit.
- **City Search**:Allows searching for weather in select cities.
- **Local Storage**: Saves the last searched city for quick access later.

## Technologies Used

- **React.js**: Frontend framework.
- **OpenWeatherMap API**: Used for fetching weather data.
- **CSS3**: Styling and responsiveness.

## City Search Functionality

The weather forecast application currently supports a limited number of cities for searching. The available cities are hardcoded, including options like New York, Los Angeles, Chicago, San Francisco, and Boston.

This is a known limitation, and if users attempt to search for cities outside of this list, they will not be able to retrieve weather data for those cities. Future improvements could involve implementing a dynamic search feature that fetches cities from an API in real-time (Due to time issue).

## Installation and Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Arpit-Yadav-Dev/weather-app.git
   ```

2. Navigate into the project directory

   ```bash
   cd weather-app
   ```

3. Install the required dependencies

   ```bash
   npm install
   ```

4. Start the development server

   ```bash
   npm start
   ```

# The app will now run on http://localhost:3000
