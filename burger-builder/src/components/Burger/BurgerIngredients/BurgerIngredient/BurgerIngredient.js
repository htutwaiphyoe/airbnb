import React from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.module.css";
const BurgerIngredient = (props) => {
    let ingredient = null;

    if (props.type === "BreadTop") {
        ingredient = (
            <div className={classes[props.type]}>
                <div className={classes.Seeds1}></div>
                <div className={classes.Seeds2}></div>
            </div>
        );
    } else {
        ingredient = <div className={classes[props.type]}></div>;
    }

    return ingredient;
};

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};
export default BurgerIngredient;
