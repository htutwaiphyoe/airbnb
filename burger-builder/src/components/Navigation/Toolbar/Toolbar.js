import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../Logo/Logo";
import NavigationItems from "../NavigationItems/NavigationItems";
import NavigationIcon from "../NavigationIcon/NavigationIcon";
const Toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <NavigationIcon onNavClick={props.onClickHandler} />
            <div className={classes.Logo}>
                <Logo />
            </div>

            <nav>
                <NavigationItems token={props.token} />
            </nav>
        </header>
    );
};

export default Toolbar;
