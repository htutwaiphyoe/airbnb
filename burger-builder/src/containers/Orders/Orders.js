import React from "react";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";
import Message from "../../components/UI/Message/Message";
import Order from "../../components/Order/Order";
import classes from "./Orders.module.css";
import * as actionCreators from "../../store/actions";
class Orders extends React.Component {
    componentDidMount() {
        this.props.fetchOrders(this.props.token, this.props.userid);
    }

    show() {
        let components = this.props.orders.map((order) => <Order order={order} key={order.id} />);
        if (this.props.orders.length === 0) {
            components = <Message type="Normal">No Orders</Message>;
        }
        if (this.props.loading) {
            components = (
                <div className={classes.Orders}>
                    <Spinner />
                </div>
            );
        }
        if (this.props.error) {
            components = <Message type="Error">{this.props.error}</Message>;
        }
        return components;
    }
    render() {
        return <div>{this.show()}</div>;
    }
}
const mapStateToProps = (state) => {
    return {
        orders: state.orders.orders,
        error: state.orders.error,
        loading: state.orders.loading,
        token: state.auth.token,
        userid: state.auth.user.id,
    };
};
const mapDispatchToProps = {
    fetchOrders: actionCreators.fetchOrders,
};
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
