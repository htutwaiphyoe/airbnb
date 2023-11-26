import React from "react";
import classes from "./Backdrop.module.css";
const BackDrop = (props) => {
    return props.show ? <div className={classes.BackDrop} onClick={props.onShow}></div> : null;
};

export default BackDrop;
