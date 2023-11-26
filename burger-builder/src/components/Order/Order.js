import React from "react";
import classes from "./Order.module.css";
const Order = (props) => {
    const { ingredients, price } = props.order;
    return (
        <div className={classes.Order}>
            <p>
                Ingredients: Salad({ingredients.Salad}), Meat: {ingredients.Meat}, Bacon:
                {ingredients.Bacon}, Cheese: {ingredients.Cheese}
            </p>
            <p>
                Price: <strong>${price}</strong>
            </p>
        </div>
    );
};

export default Order;
