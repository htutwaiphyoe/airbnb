import React from "react";
import Button from "../UI/Button/Button";
import Burger from "../Burger/Burger";
import classes from "./CheckoutSummary.module.css";
const CheckoutSummary = (props) => {
    return (
        <div className={classes.CheckoutSummary}>
            <h1>We hope it tastes well.</h1>
            <Burger ingredients={props.ingredients} />
            <Button type="Danger" onButtonClick={props.onCheckOutCancel}>
                Cancel
            </Button>
            <Button type="Success" onButtonClick={props.onCheckOutContinue}>
                Order Now
            </Button>
        </div>
    );
};

export default CheckoutSummary;
