import React from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import PhotoList from "../../Components/PhotoList/PhotoList";
import Spinner from "../../Components/Spinner/Spinner";
import Error from "../../Components/Error/Error";
class Search extends React.Component {
    componentDidMount() {
        this.props.resetPage();
        this.props.clearSearchPhotos();
        window.scrollTo(0, 0);
        const query = new URLSearchParams(this.props.location.search);
        let q = "";
        for (let params of query.entries()) {
            q = params[1];
        }
        this.props.getSearchPhotos(1, q);
        window.addEventListener("scroll", () => {
            if (this.props.list.current) {
                if (
                    window.scrollY + window.innerHeight >
                    (this.props.list.current.scrollHeight * 4) / 5
                ) {
                    if (!this.props.isRequested) {
                        this.props.incrementPage();
                        this.props.getSearchPhotos(this.props.page, this.props.query);
                    }
                }
            }
        });
    }
    render() {
        let components = (
            <PhotoList photos={this.props.searchPhotos} getPhotosList={this.props.getPhotosList} />
        );
        if (this.props.loading) {
            components = <Spinner />;
        }
        if (this.props.error) {
            components = <Error message={this.props.error.message} />;
        }
        return <React.Fragment>{components}</React.Fragment>;
    }
}
const mapStateToProps = (state) => {
    return {
        searchPhotos: state.search.searchPhotos,
        query: state.search.query,
        loading: state.ui.loading,
        error: state.ui.error,
        page: state.ui.page,
        list: state.ui.list,
        isRequested: state.ui.isRequested,
    };
};
const mapDispatchToProps = {
    getSearchPhotos: actionCreators.getSearchPhotos,
    clearSearchPhotos: actionCreators.clearSearchPhotos,
    getPhotosList: actionCreators.getPhotosList,
    incrementPage: actionCreators.incrementPage,
    resetPage: actionCreators.resetPage,
};
export default connect(mapStateToProps, mapDispatchToProps)(Search);
