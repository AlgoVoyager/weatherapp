import { useState, useEffect } from 'react';

const useWeatherApi = (city) => {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const APIKey = "12b74f148c6e9eb83c472be3141a534c"
  
  useEffect(() => {
    if (!city) return; 

    const fetchWeatherData = async () => {
      setLoading(true);
      setError(null); 

      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${APIKey}&units=metric`
        );
        if (!response.ok) {
          throw new Error('Error fetching weather data');
        }

        const data = await response.json();
        setWeatherData(data); 
      } catch (err) {
        setError(err.message); 
      } finally {
        setLoading(false); 
      }
    };

    fetchWeatherData();
  }, [city]); 

  return { weatherData, loading, error };
};

export default useWeatherApi;
