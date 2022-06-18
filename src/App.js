import { useState } from "react";
import Form from "./Components/Forms/Form";
import Weather from "./Components/Weather/Weather";

function App() {
  console.log("app running");

  const [running, setRunning] = useState(false);
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lon: null
  });
  const getLocationHandler = async (cityName) => {
    console.log(cityName);
    setRunning(true);
    setCoordinates({
      lat: null,
      lon: null,
    });
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=3569019c79759949d934004dd6afd4c9`
    );
    const data = await response.json();
    console.log(data[0].lat);
    let updatedCoordinates = {
      lat: data[0].lat,
      lon: data[0].lon,
    }

    setCoordinates(() => ({...updatedCoordinates}));
    console.log(coordinates);
  };
  return (
    <>
      <div className="main-container">
        <Form onEnteredCityName={getLocationHandler} />
        {running && <Weather coordinates={`${coordinates.lat} ${coordinates.lon}`}/>}
      </div>
    </>
  );
}

export default App;
