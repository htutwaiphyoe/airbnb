import React, { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import * as actionCreators from "../../store/actions";
import VideoList from "../../components/VideoList/VideoList";
import MessageBox from "../../components/MessageBox/MessageBox";
const Home = (props) => {
    const dispatch = useDispatch();
    const shownVideos = useSelector((state) => state.videos.shownVideos);
    const loading = useSelector((state) => state.ui.loading);
    const error = useSelector((state) => state.ui.error);
    const list = useSelector((state) => state.ui.listRef);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        dispatch(actionCreators.selected(false));
        dispatch(actionCreators.loadVideos());
    }, [dispatch]);

    const scrollHandler = useCallback(() => {
        if (list) {
            if (window.scrollY + window.innerHeight > (list.clientHeight * 4) / 5) {
                if (shownVideos.length !== 50) {
                    dispatch(actionCreators.scroll());
                }
            }
        }
    }, [list, dispatch, shownVideos.length]);
    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, [scrollHandler]);
    if (error) {
        return <MessageBox message={error.message} />;
    }
    if (loading) {
        return (
            <VideoList
                videos={[
                    { id: 1, loading },
                    { id: 2, loading },
                    { id: 3, loading },
                    { id: 4, loading },
                    { id: 5, loading },
                ]}
            />
        );
    }

    return <VideoList videos={shownVideos} />;
};

export default Home;
