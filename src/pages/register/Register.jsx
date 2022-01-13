import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./register.css";

export default function Register() {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const registrationUserHandleClick = async (e) => {
    e.preventDefault();

    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      };

      try {
        await axios.post("/auth/register", user);
        navigate("/");
      } catch (error) {
        console.error(error);
      }
    }
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
          <form className="loginBox" onSubmit={registrationUserHandleClick}>
            <input
              placeholder="Username"
              required
              ref={userName}
              className="loginInput"
            />
            <input
              placeholder="Email"
              required
              type={email}
              ref={email}
              className="loginInput"
            />
            <input
              placeholder="Password"
              required
              minLength={6}
              type="password"
              ref={password}
              className="loginInput"
            />
            <input
              placeholder="Password Again"
              required
              minLength={6}
              type="password"
              ref={passwordAgain}
              className="loginInput"
            />
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton">Log into Account</button>
          </form>
        </div>
      </div>
    </div>
  );
}
