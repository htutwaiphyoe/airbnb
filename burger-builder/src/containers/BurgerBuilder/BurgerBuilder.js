import React from "react";
import { connect } from "react-redux";
import Burger from "../../components/Burger/Burger";
import BurgerControls from "../../components/Burger/BurgerControls/BurgerControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Spinner from "../../components/UI/Spinner/Spinner";
import classes from "./BurgerBuilder.module.css";
import Message from "../../components/UI/Message/Message";
import * as actionCreators from "../../store/actions";

export class BurgerBuilder extends React.Component {
    state = {
        purchasable: false,
        shownModal: false,
    };
    componentDidMount() {
        this.props.initIngredients();
    }
    onShowModalHandler = () => {
        this.setState((state, props) => {
            return {
                shownModal: !state.shownModal,
            };
        });
    };
    purchasableHandler = () => {
        let sum = 0;
        for (let key of Object.keys(this.props.ingredients)) {
            sum += this.props.ingredients[key];
        }
        return sum === 0 ? false : true;
    };
    onContinueHandler = () => {
        this.props.history.push("/checkout");
    };
    render() {
        let disabled = { ...this.props.ingredients };
        for (let key in disabled) {
            disabled[key] = disabled[key] <= 0;
        }
        let orderSummary = null;
        let burgerbuilder = null;
        if (this.props.ingredients) {
            orderSummary = (
                <OrderSummary
                    ingredients={this.props.ingredients}
                    price={this.props.price}
                    onShowModal={this.onShowModalHandler}
                    show={this.state.shownModal}
                    onContinue={this.onContinueHandler}
                />
            );
            burgerbuilder = (
                <React.Fragment>
                    <Burger ingredients={this.props.ingredients} />
                    <BurgerControls
                        onMoreButtonClick={this.props.addIngredient}
                        onLessButtonClick={this.props.removeIngredient}
                        disabled={disabled}
                        price={this.props.price}
                        purchasable={this.purchasableHandler()}
                        onShowModal={this.onShowModalHandler}
                        isAuth={this.props.token}
                        checkBuilding={this.props.checkBuilding}
                    />
                </React.Fragment>
            );
        }
        if (this.props.loading) {
            burgerbuilder = (
                <div className={classes.BurgerBuilder}>
                    <Spinner />
                </div>
            );
        }
        if (this.props.error) {
            burgerbuilder = (
                <div className={classes.BurgerBuilder}>
                    <Message type="Error">{this.props.error}</Message>
                </div>
            );
        }

        return (
            <React.Fragment>
                <Modal show={this.state.shownModal} onShowModal={this.onShowModalHandler}>
                    {orderSummary}
                </Modal>
                {burgerbuilder}
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerbuilder.ingredients,
        price: state.burgerbuilder.price,
        error: state.burgerbuilder.error,
        loading: state.burgerbuilder.loading,
        token: state.auth.token !== null,
    };
};
const mapDispatchToProps = {
    addIngredient: actionCreators.addIngredient,
    removeIngredient: actionCreators.removeIngredient,
    initIngredients: actionCreators.initIngredients,
    checkBuilding: actionCreators.checkBuilding,
};
export default connect(mapStateToProps, mapDispatchToProps)(BurgerBuilder);
