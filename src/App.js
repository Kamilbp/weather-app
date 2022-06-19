import { useState } from "react";
import Form from "./Components/Forms/Form";
import Weather from "./Components/Weather/Weather";


function App() {
  const [running, setRunning] = useState(false);
  const [weather, setWeather] = useState("");
  const [iconId, setIconId] = useState("");

  let content;

  const getLocationHandler = async (cityName) => {
    console.log(cityName);
    setRunning(true);
    const geocodeResponse = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=3569019c79759949d934004dd6afd4c9`
    );
    const geocodeData = await geocodeResponse.json();
    // console.log(response.status);
    // console.log(data[0].lat)
    const updatedCoords = {
      lat: geocodeData[0].lat,
      lon: geocodeData[0].lon,
    };
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${updatedCoords.lat}&lon=${updatedCoords.lon}&appid=3569019c79759949d934004dd6afd4c9`
    );

    const weatherData = await weatherResponse.json();
    console.log(weatherData);
    setWeather(weatherData.weather[0].main);
    setIconId(weatherData.weather[0].icon);
  };

  if (running === true){
    const weatherSvg = (
      <img
        src={`http://openweathermap.org/img/wn/${iconId}@2x.png`}
        alt="weather icon"
      />
    );
    content = <Weather weatherIcon={weatherSvg} weatherName={weather}/>;
  }


  return (
    <>
      <div className="main-container">
        <Form onEnteredCityName={getLocationHandler} />
        {running && content}
      </div>
    </>
  );
}

export default App;
