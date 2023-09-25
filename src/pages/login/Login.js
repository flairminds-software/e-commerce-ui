import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/api";

export const Login = (props) => {
  const { setisLoggedin } = props;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login_response = await login(email, pass);
    console.log(login_response);
    if (login_response.msg === "Login sucessful") {
      // setUserLoginCookie();
      setisLoggedin(true);
      nav("/");
    } else {
      alert("Unable to login: " + login_response.msg);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit">Log In</button>
      </form>
      <Link to="/Register">
        <button className="link-btn">
          Don't have an account? Register here.
        </button>
      </Link>
    </div>
  );
};
