import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import CheckoutSummary from "../../components/CheckoutSummary/CheckoutSummary";
import CheckoutForm from "./CheckoutForm/CheckoutForm";
import classes from "./Checkout.module.css";
class Checkout extends React.Component {
    onCheckOutCancel = () => {
        this.props.history.replace("/");
    };
    onCheckOutContinue = () => {
        this.props.history.replace("/checkout/form");
    };
    render() {
        let component = (
            <div className={classes.Checkout}>
                <Redirect to="/" />
            </div>
        );
        if (this.props.ingredients) {
            component = (
                <React.Fragment>
                    <CheckoutSummary
                        ingredients={this.props.ingredients}
                        onCheckOutContinue={this.onCheckOutContinue}
                        onCheckOutCancel={this.onCheckOutCancel}
                    />
                    <Route path={`${this.props.match.url}/form`} render={() => <CheckoutForm />} />
                </React.Fragment>
            );
        }
        return <div>{component}</div>;
    }
}
const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerbuilder.ingredients,
        price: state.burgerbuilder.price,
    };
};
export default connect(mapStateToProps)(Checkout);
