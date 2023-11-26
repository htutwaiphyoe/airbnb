import React from "react";
import classes from "./NavigationItems.module.css";
import NavigationItem from "./NavigationItem/NavigationItem";

const NavigationItems = (props) => {
    let components = (
        <NavigationItem link="/auth" exact>
            Sign up
        </NavigationItem>
    );
    if (props.token) {
        components = (
            <React.Fragment>
                <NavigationItem link="/orders">Orders</NavigationItem>
                <NavigationItem link="/logout">Logout</NavigationItem>
            </React.Fragment>
        );
    }
    return (
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact>
                BurgerBuilder
            </NavigationItem>
            {components}
        </ul>
    );
};

export default NavigationItems;
