import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
    return (
        <button
            className={`${classes.Button} ${classes[props.type]}`}
            onClick={props.onButtonClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

export default Button;
