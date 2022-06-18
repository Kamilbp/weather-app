import { useRef, useState } from "react";
import Cart from "../UI/Cart";
import Input from "../UI/Input";

import classes from './Form.module.css';

const Form = () => {

  const taskInputRef = useRef();
  const [cityName, setCityName] = useState(''); 

  const submitHandler = (e) => {
    e.preventDefault();

    const enteredValue = taskInputRef.current.value;
    setCityName(enteredValue);
    console.log(enteredValue);
  }

  return (
    <Cart>
      <form onSubmit={submitHandler} className={classes['input-form']}>
        <Input label="Podaj nazwe miejscowosci" ref={taskInputRef}/>
      </form>
    </Cart>
  )
}

export default Form;