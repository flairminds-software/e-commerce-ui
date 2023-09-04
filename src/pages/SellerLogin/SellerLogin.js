import React, { useState } from "react";
import styles from "./SellerLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { sellerLogin } from "../../services/api";
// import { setSellerLoginCookie } from "../../components/Cookies/Cookies";

export const SellerLogin = (props) => {
  const { setSellerIsLoggedin } = props;
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const nav = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const login_response = await sellerLogin(email, pass);

    if (login_response.msg === "Login sucessful") {
      console.log(login_response);
      // Set a cookie when the seller logs in
      // setSellerLoginCookie();
      setSellerIsLoggedin(true);
      nav("/seller/Home");
    } else {
      alert("Unable to login: " + login_response.msg);
    }
  };

  return (
    <div className={styles["auth-form-container"]}>
      <h2>Login</h2>
      <form className={styles["login-form"]} onSubmit={handleSubmit}>
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
