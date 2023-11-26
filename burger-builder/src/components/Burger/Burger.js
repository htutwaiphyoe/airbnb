import React from "react";
import BurgerIngredient from "./BurgerIngredients/BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";
const Burger = (props) => {
    const ingredients = [];
    for (let type of Object.keys(props.ingredients)) {
        for (let i = 1; i <= props.ingredients[type]; i++) {
            ingredients.push(<BurgerIngredient type={type} key={`${type}-${i}`} />);
        }
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="BreadTop" />
            {ingredients.length > 0 ? ingredients : <p>Please add burger ingredients</p>}
            <BurgerIngredient type="BreadBottom" />
        </div>
    );
};

export default Burger;
