import { useRef} from "react";
import Cart from "../UI/Cart";
import Input from "../UI/Input";

import classes from "./Form.module.css";

const Form = (props) => {
  const taskInputRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();

    const enteredValue = taskInputRef.current.value;
    if (enteredValue.trim().length > 0) {
      props.onEnteredCityName(enteredValue);
      // console.log(enteredValue);
    }
  };

  return (
    <Cart>
      <form onSubmit={submitHandler} className={classes["input-form"]}>
        <Input label="Podaj nazwe miejscowosci" ref={taskInputRef} />
      </form>
    </Cart>
  );
};

export default Form;
