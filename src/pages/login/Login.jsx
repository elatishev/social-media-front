import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { CircularProgress } from "@material-ui/core";
import { loginUser } from "../../slices/Auth/registrationSlice";
import "./login.css";

export default function Login() {
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.registration);
  const email = useRef();
  const password = useRef();

  const handleClick = (event) => {
    event.preventDefault();
    const logInUserInfo = {
      email: email.current.value,
      password: password.current.value,
    };

    dispatch(loginUser(logInUserInfo));
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Social media</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on Lamasocial.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              value="DjonTrue@gmail.com"
              placeholder="Email"
              className="loginInput"
              required
              type="email"
              ref={email}
            />
            <input
              value="123456"
              placeholder="Password"
              className="loginInput"
              minLength={6}
              required
              type="password"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? <CircularProgress color="primary" size="20px" /> : "Log In"}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <Link to={"/register"} className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Create a new account"
              )}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
