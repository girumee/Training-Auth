import React, { useState } from "react";
import { Link, Redireact } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const Login = ({ login }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const { email, password } = formData;

    const onChange = (e) =>
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

    const onSubmit = (e) => {
        e.preventDefault();

        login(email, password);
    };

    //Is the user Authenticated?
    //Redirect them to the home page

    return (
        <div className="container mt-5">
            <h1>Sign In</h1>
            <p>Sign into your Account</p>
            <form onSubmit={(e) => onSubmit(e)}>
                <div className="form-group">
                    <input
                        className="form-control"
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        className="form-control mt-2"
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        minLength={6}
                        required
                    />
                </div>
                <button className="btn btn-primary mt-2" type="submit">
                    Login
                </button>
            </form>
            <p className="mt-3">
                Don't have an account? <Link to="/signup">Sign Up</Link>
            </p>
            <p className="mt-3">
                Forget your password?{" "}
                <Link to="/reset-Password">Reset Password</Link>
            </p>
        </div>
    );
};

// const mapStateToProps = state => ({
// is authenticated?
// })

export default connect(null, { login })(Login);
