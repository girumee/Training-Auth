import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
    <div className="container ">
        <div className="jumbotron mt-5">
            <h1 className="display-4">Well Come to Training page</h1>
            <p className="lead">
                This is an incredible authentication system with production
                level feature!
            </p>
            <hr className="my-4" />
            <p>Click the Log In button</p>
            <p className="lead">
                <Link
                    className="btn btn-primary btn-lg"
                    to="/login"
                    role="button"
                >
                    Login
                </Link>
            </p>
        </div>
    </div>
);

export default Home;
