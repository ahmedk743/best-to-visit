import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faLock, faEnvelope } from "@fortawesome/free-solid-svg-icons";

function Login() {
  const [viewPassword, setViewPassword] = useState(false);
  const [state, setState] = useState({ email: "", password: "" });

  const { email, password } = state;

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    if (password.length < 6) {
      return setError("Passwords must be 6 characters long!");
    }

    setError("");
    setLoading(true);

    const response = await fetch("http://localhost:4000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "emailnot") {
      setError("User not found!");
      setLoading(false);
      return;
    }
    if (data.status === "passwordnot") {
      setError("Entered password is wrong!");
      setLoading(false);
      return;
    }

    if (data.user) {
      localStorage.setItem("token", data.user);
      console.log("token", data.user);
      window.location.href = "/book";
    }

    setLoading(false);
  }

  const onInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <div
      style={{
        marginTop: 50,
        marginRight: "30%",
        marginLeft: "30%",
        padding: 35,
        border: "1px solid #ccc",
        borderRadius: 20,
        marginBottom: 30,
      }}
    >
      <div className="title">Login</div>

      {error.length > 0 && (
        <div className="notification is-danger is-light">{error}</div>
      )}

      <div className="field">
        <label className="label">
          Email <span style={{ color: "red" }}>*</span>{" "}
        </label>
        <p className="control has-icons-left">
          <input
            required
            className="input"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faEnvelope} />
          </span>
        </p>
      </div>
      <div className="field">
        <label className="label">
          Password <span style={{ color: "red" }}>*</span>
        </label>
        <p className="control has-icons-left has-icons-right">
          <input
            required
            className="input"
            type={viewPassword ? "text" : "password"}
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
          />
          <span className="icon is-small is-left">
            <FontAwesomeIcon icon={faLock} />
          </span>
          <i
            style={{
              position: "absolute",
              top: 7,
              right: 10,
              color: viewPassword ? "black" : "#7774",
            }}
            onClick={() => setViewPassword(!viewPassword)}
          >
            <FontAwesomeIcon icon={faEye} />
          </i>
        </p>
      </div>

      <div className="field">
        <p className="control is-expanded">
          {loading ? (
            <button onClick={handleLogin} className="button is-info is-loading">
              Login
            </button>
          ) : (
            <button onClick={handleLogin} className="button is-info">
              Login
            </button>
          )}
        </p>
      </div>
      <div className="field" style={{ marginTop: 50 }}>
        <p className="control">
          <span className="block" style={{ alignSelf: "flex-end" }}>
            Don't have an account?{" "}
            <Link to={{ pathname: "/signup" }} href="#">
              Register!
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
