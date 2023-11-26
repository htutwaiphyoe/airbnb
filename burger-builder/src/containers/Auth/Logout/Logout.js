import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../../store/actions";
import { Redirect } from "react-router-dom";
class Logout extends React.Component {
    componentDidMount() {
        this.props.logout();
    }
    render() {
        return <Redirect to="/" />;
    }
}
const mapDispatchToProps = {
    logout: actionCreators.logout,
};
export default connect(null, mapDispatchToProps)(Logout);
