import React from "react";
import classes from "./NavigationIcon.module.css";
const NavigationIcon = (props) => {
    return (
        <div onClick={props.onNavClick} className={classes.NavigationIcon}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default NavigationIcon;
