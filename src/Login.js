import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./css/Login.css";
import { auth } from "./firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = (e) => {
    e.preventDefault();
    console.log("email", email, "password", password);
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {})
      .catch((err) => alert(err.message));
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg"
          alt=""
        />
      </Link>
      <div className="login__container">
        <h1>Login</h1>
        <form>
          <h5>Email</h5>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <button onClick={login} className="login__container__button">
            Sign in
          </button>
        </form>
        <p>
          If you run a website that uses cookies, you likely need to notify your
          site visitors of your use of cookies and get consent to do so.
        </p>
        <button onClick={register} className="login__container__button">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
