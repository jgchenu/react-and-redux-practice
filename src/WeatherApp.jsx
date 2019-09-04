import React from 'react';
import Weather from '@/weather/views/weather';
import CitySelector from '@/weather/views/citySelector';


function WeatherApp() {
  return (
    <div className="weather-app">
      <CitySelector />
      <Weather />
    </div>
  );
}

export default WeatherApp;
