import { useEffect } from "react";
import Cart from "../UI/Cart";

import classes from "./Weather.module.css";

const Weather = (props) => {
  const callCurrWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${props.latCord}&lon=${props.lonCord}&appid=3569019c79759949d934004dd6afd4c9`
    );

    const data = await response.json();
    console.log(data)
  };
  
  return (
    <Cart>
      <div className={classes.weather}>
        <p>tutaj bedzie pogoda</p>
      </div>
    </Cart>
  );
};

export default Weather;
