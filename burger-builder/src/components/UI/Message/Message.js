import React from "react";
import classes from "./Message.module.css";
const Message = (props) => {
    return <div className={classes[props.type]}>{props.children}</div>;
};

export default Message;
