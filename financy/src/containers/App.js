import React, { Suspense } from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Layout from "./Layout/Layout";
import Today from "./Today/Today";
import Form from "./Form/Form";
import Analysis from "./Analysis/Analysis";
import Loader from "../components/UI/Loader/Loader";
import ErrorBoundary from "../hoc/ErrorBoundary/ErrorBoundary";
const Home = React.lazy(() => import("./Home/Home"));

const App = () => {
    return (
        <BrowserRouter>
            <Layout>
                <ErrorBoundary>
                    <Suspense fallback={<Loader />}>
                        <Switch>
                            <Route path="/" exact component={Home} />
                            <Route path="/dashboard" exact component={Today} />
                            <Route path="/form" exact component={Form} />
                            <Route path="/analysis" exact component={Analysis} />
                            <Redirect to="/" />
                        </Switch>
                    </Suspense>
                </ErrorBoundary>
            </Layout>
        </BrowserRouter>
    );
};

export default App;
