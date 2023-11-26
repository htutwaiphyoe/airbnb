import React from "react";
import Button from "../../UI/Button/Button";
import classes from "./OrderSummary.module.css";
const OrderSummary = (props) => {
    const ingredientsSummary = Object.keys(props.ingredients).map((k) => (
        <li key={k}>
            {k}: {props.ingredients[k]}
        </li>
    ));

    return (
        <React.Fragment>
            <h3>Your Order Summary</h3>
            <p className={classes.paragraph}>The ingredients of your delicious burger:</p>
            <ul className={classes.list}>{ingredientsSummary}</ul>
            <p className={classes.paragraph}>
                Total Price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            <Button type="Danger" onButtonClick={props.onShowModal}>
                CANCAL
            </Button>
            <Button type="Success" onButtonClick={props.onContinue}>
                CONTINUE
            </Button>
        </React.Fragment>
    );
};

export default OrderSummary;
