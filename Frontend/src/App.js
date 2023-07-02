import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./containers/Home";
import Login from "./containers/Login";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Activate from "./containers/Activate";

import { Provider } from "react-redux";
import store from "./store";

import Layout from "./hocs/Layout";

const App = () => (
    <Provider store={store}>
        <Router>
            <Layout>
                <Routes>
                    <Route exact path="/" Component={Home} />
                    <Route exact path="/login" Component={Login} />
                    <Route exact path="/signup" Component={Signup} />
                    <Route
                        exact
                        path="/reset-Password"
                        Component={ResetPassword}
                    />
                    <Route
                        exact
                        path="/password-reset/:uid/:token"
                        Component={ResetPasswordConfirm}
                    />
                    <Route
                        exact
                        path="/activate/:uid/:token"
                        Component={Activate}
                    />
                </Routes>
            </Layout>
        </Router>
    </Provider>
);

export default App;
