import React from "react";
import classes from "./Input.module.css";
const Input = (props) => {
    let inputElement = null;
    let inputClasses = [classes.InputElement];
    if (props.invalid && props.touch) {
        inputClasses.push(classes.Invalid);
    }
    switch (props.type) {
        case "textarea":
            inputElement = (
                <textarea
                    className={inputClasses.join(" ")}
                    {...props.config}
                    value={props.value}
                    onChange={props.onInputChange}
                />
            );
            break;
        case "select":
            inputElement = (
                <select
                    className={inputClasses.join(" ")}
                    value={props.value}
                    onChange={props.onInputChange}
                >
                    {props.config.options.map((option) => (
                        <option value={option.value} key={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = (
                <input
                    className={inputClasses.join(" ")}
                    {...props.config}
                    value={props.value}
                    onChange={props.onInputChange}
                />
            );
    }
    return <div className={classes.Input}>{inputElement}</div>;
};

export default Input;
