import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loginUser } from "../../features/Auth/registrationActions";
import { CircularProgress } from "@material-ui/core";
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
              placeholder="Email"
              className="loginInput"
              required
              type="email"
              ref={email}
            />
            <input
              placeholder="Password"
              className="loginInput"
              minLength={6}
              required
              type="password"
              ref={password}
            />
            <button className="loginButton" disabled={isFetching}>
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Log In"
              )}
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              {isFetching ? (
                <CircularProgress color="primary" size="20px" />
              ) : (
                "Create a nrw account"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
