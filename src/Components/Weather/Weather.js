import Cart from "../UI/Cart";

import classes from './Weather.module.css';

const Weather = (props) => {
  return <Cart>
    <div className={classes.weather}>
      <p>{props.coordinates}</p>
    </div>
  </Cart>;
};

export default Weather;
