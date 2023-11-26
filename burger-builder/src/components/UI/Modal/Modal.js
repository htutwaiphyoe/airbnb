import React from "react";
import classes from "./Modal.module.css";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.show !== nextProps.show || this.props.children !== nextProps.children;
    }
    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} onShow={this.props.onShowModal}></Backdrop>

                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show ? "translateY(0)" : "translateY(-200vh)",
                        opacity: this.props.show ? "1" : "0",
                    }}
                >
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;
