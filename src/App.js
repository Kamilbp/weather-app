import { useState, useEffect } from "react";
import Form from "./Components/Forms/Form";
import Weather from "./Components/Weather/Weather";

function App() {

  const [running, setRunning] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: "",
    lon: "",
  });
  const getLocationHandler = async (cityName) => {
    console.log(cityName);
    setRunning(true);
    setCoordinates({
      ...coordinates,
      lat: "",
      lon: "",
    });
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=3569019c79759949d934004dd6afd4c9`
    );
    const data = await response.json();
    console.log(response.status);
    console.log(data[0].lat)

    setCoordinates({
      ...coordinates,
      lat: data[0].lat,
      lon: data[0].lon,
    });
  };

  return (
    <>
      <div className="main-container">
        <Form onEnteredCityName={getLocationHandler} />
        {/* {running && <Weather latCord={coordinates.lat} lonCord={coordinates.lon}/>} */}
      </div>
    </>
  );
}

export default App;
