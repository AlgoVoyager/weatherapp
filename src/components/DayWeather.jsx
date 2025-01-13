const DayWeather = ( fList) => {
    
    const date = new Date();
    const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const weekdayName = weekdays[date.getDay()];

    console.log(weekdayName); 
    
    const items = [];
    
    let j=date.getDay();
    for (let i = 0; i < 5; i++){
      items.push(
      <div className="DayWeather" key={i}>
            <div className="weekday">
                {weekdays[j]}
            </div>
            <img src="" alt={Object(fList).fList[i].weather[0].main} className="dayImg" />
            <div className="dayTemp">
                <div className="tempMax">
                    {Object(fList).fList[i].main.temp_max.toFixed(1)}
                </div>
                <div className="tempMin">
                    {Object(fList).fList[i].main.temp_min.toFixed(1)}
                </div>
                    

            </div>
      </div>);
    //   i++;
      j++;
    }

    

  
    return <div className="daysWeather">{items}</div>;
  };
  
  export default DayWeather;
  