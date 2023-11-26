import React from "react";
import Modal from "../../components/UI/Modal/Modal";
const ErrorPage = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null,
        };
        componentDidMount() {
            this.requestInterceptor = axios.interceptors.request.use(
                (config) => {
                    this.onShowModal();
                    return config;
                },
                (error) => {
                    this.setState({ error });
                    return Promise.reject(error);
                }
            );
            this.responseInterceptor = axios.interceptors.response.use(
                (config) => {
                    return config;
                },
                (error) => {
                    this.setState({ error });
                    return Promise.reject(error);
                }
            );
        }
        componentWillUnmount() {
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }
        onShowModal = () => {
            this.setState({ error: null });
        };
        render() {
            return (
                <React.Fragment>
                    <Modal show={this.state.error} onShowModal={this.onShowModal}>
                        <div style={{ textAlign: "center" }}>
                            Oops! Something went wrong.
                            <span role="img" aria-label="bomb">
                                💣
                            </span>
                        </div>
                    </Modal>
                    <WrappedComponent {...this.props} />
                </React.Fragment>
            );
        }
    };
};

export default ErrorPage;
