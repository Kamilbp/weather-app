import classes from "./Input.module.css";
import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <>
      <label className={classes.label}>{props.label}</label>
      <input ref={ref} className={classes.input}>{props.children}</input>
    </>
  );
});

export default Input;
