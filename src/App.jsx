import React, { useEffect, useState} from 'react'
import './index.css'
import rainy from './assets/rainy.png'
import cloudy from './assets/cloudy.png'
import sunny from './assets/sunny.png'
import haze from './assets/haze.png'
import thunder from './assets/thunder.png'
import Clear from './assets/Clear.png'
import DayWeather from './components/DayWeather';
const App = () => {
  const weatherIcons = {
    rainy :rainy,
    sunny :sunny,
    haze :haze,
    Clear :Clear,
    cloudy :cloudy,
    mist :haze,
  }
  const [search, setsearch] = useState("");
  const [date, setdate] = useState("")
  const [wData, setwData] = useState({
    "cod": "200",
    "message": 0,
    "cnt": 40,
    "list": [
        {
            "dt": 1736780400,
            "main": {
                "temp": 16.47,
                "feels_like": 15.53,
                "temp_min": 15.2,
                "temp_max": 16.47,
                "pressure": 1015,
                "sea_level": 1015,
                "grnd_level": 952,
                "humidity": 52,
                "temp_kf": 1.27
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.52,
                "deg": 36,
                "gust": 4.83
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-01-13 15:00:00"
        },
        {
            "dt": 1736791200,
            "main": {
                "temp": 14.31,
                "feels_like": 13.15,
                "temp_min": 12.92,
                "temp_max": 14.31,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 952,
                "humidity": 52,
                "temp_kf": 1.39
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.48,
                "deg": 54,
                "gust": 6.74
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-01-13 18:00:00"
        },
        {
            "dt": 1736802000,
            "main": {
                "temp": 11.59,
                "feels_like": 10.24,
                "temp_min": 11.59,
                "temp_max": 11.59,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 950,
                "humidity": 55,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.67,
                "deg": 60,
                "gust": 7.62
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-01-13 21:00:00"
        },
        {
            "dt": 1736812800,
            "main": {
                "temp": 11.1,
                "feels_like": 9.78,
                "temp_min": 11.1,
                "temp_max": 11.1,
                "pressure": 1016,
                "sea_level": 1016,
                "grnd_level": 951,
                "humidity": 58,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01n"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.22,
                "deg": 63,
                "gust": 5.22
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "n"
            },
            "dt_txt": "2025-01-14 00:00:00"
        },
        {
            "dt": 1736823600,
            "main": {
                "temp": 14.33,
                "feels_like": 13.15,
                "temp_min": 14.33,
                "temp_max": 14.33,
                "pressure": 1018,
                "sea_level": 1018,
                "grnd_level": 953,
                "humidity": 51,
                "temp_kf": 0
            },
            "weather": [
                {
                    "id": 800,
                    "main": "Clear",
                    "description": "clear sky",
                    "icon": "01d"
                }
            ],
            "clouds": {
                "all": 0
            },
            "wind": {
                "speed": 3.1,
                "deg": 85,
                "gust": 4.95
            },
            "visibility": 10000,
            "pop": 0,
            "sys": {
                "pod": "d"
            },
            "dt_txt": "2025-01-14 03:00:00"
        }
        
    ],
    "city": {
        "id": 1269743,
        "name": "Indore",
        "coord": {
            "lat": 22.7179,
            "lon": 75.8333
        },
        "country": "IN",
        "population": 1837041,
        "timezone": 19800,
        "sunrise": 1736732346,
        "sunset": 1736771464
    }
});
  const [msg, setmsg] = useState("");
  function FtoC(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}
  const APIKey = "12b74f148c6e9eb83c472be3141a534c"
  
  const handleSearch = async () =>{
    setdate(new Date().getDay())
    setmsg("fetching Weather Data...")
    try{
      const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${search}&appid=${APIKey}&units=metric`
      await fetch(apiUrl)
      .then(response => response.json()).then(json => {
        setwData(json)
        console.log(json.list)
        console.log(json)
      })
      
    }
    catch(error){
      throw console.error(error);
      
    }
    console.log(wData.list)
  }
  // useEffect(()=>{

  // },[search])
  return (
    <>
      <header>
        <h1>Weather App</h1>
        <div>
          <input type="text" name='search' placeholder='Search Any City...'
            value={search} onChange={(e)=>setsearch(e.target.value)}
            />
          <button onClick={handleSearch}>Search</button>
        </div>
      </header>
      <main>
        {wData.city&&<div className="location">
          <p>Showing Weather Data of : </p>
          <h3>{wData.city.name}</h3>
        </div>}
        <div className="overview">
          <div className='overview-left'>
            <div className="main-temp">
              <img src={"https://ssl.gstatic.com/onebox/weather/64/sunny.png"} alt="sun" /> 
              <div className="temp-amount">{wData.list[0]&&( wData.list[0].main.temp).toFixed(1)  }</div>

              <div className="temp-unit">°C</div>
            </div>
            <div className="other-data">
              <p>Humidity: {wData.list[0]?wData.list[0].main.humidity+"%":"0%"}</p>
              <p>Wind: {wData.list[0]?wData.list[0].wind.speed+" km/h":"0km/h"}</p>
            </div>
          </div>
          <div className="overview-right">
            <h2>Weather</h2>
            {/* <div className="time"> {date} </div> */}
            <div className="weather-type">{wData.list[0]?wData.list[0].weather[0].main :"--"}</div>
          </div>
        </div>

          {/* <h3 className=''>7 Days Forecast</h3> */}
          <DayWeather fList={wData.list}/>
          
      </main>
    </>
  )
}

export default App