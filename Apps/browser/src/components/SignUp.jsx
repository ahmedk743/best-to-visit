import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const [viewPassword, setViewPassword] = useState(false);

  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const { name, email, password, cpassword } = state;

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  let navigate = useNavigate();

  async function handleSignUp() {
    setSuccess(false);

    if (password !== cpassword) {
      return setError("Passwords do not match");
    }
    if (password.length < 6) {
      return setError("Passwords must be 6 characters long!");
    }

    setError("");
    setLoading(true);

    const response = await fetch("http://localhost:4000/api/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const data = await response.json();

    if (data.status === "ok") {
      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 5000);
    } else {
      setError(data.error);
    }
    setLoading(false);
  }

  const onInputChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const renderFormBody = () => {
    return (
      <>
        <div className="field">
          <label className="label">
            Name <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              onChange={onInputChange}
              required
            />
          </p>
        </div>
        <div className="field">
          <label className="label">
            Email <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <p className="control">
            <input
              className="input"
              type="text"
              placeholder="Email"
              name="email"
              value={email}
              onChange={onInputChange}
              required
            />
          </p>
        </div>
        <div className="field">
          <label className="label">
            Password <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <p className="control">
            <input
              className="input"
              type="password"
              placeholder="Password"
              name="password"
              onChange={onInputChange}
              value={password}
              required
            />
          </p>
        </div>
        <div className="field">
          <label className="label">
            Confirm Password <span style={{ color: "red" }}>*</span>{" "}
          </label>
          <p className="control">
            <input
              className="input"
              type="password"
              placeholder="Confirm Password"
              name="cpassword"
              value={cpassword}
              onChange={onInputChange}
              required
            />
          </p>
        </div>
      </>
    );
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
      }}
    >
      <div className="title">Sign Up</div>

      {/* Errors Notification */}
      {error.length > 0 && (
        <div className="notification is-danger is-light">{error}</div>
      )}
      {success && (
        <div className="notification is-success is-light">
          <button onClick={() => setSuccess(false)} className="delete"></button>
          Account has been successfully created!
        </div>
      )}

      <form>{renderFormBody()}</form>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          marginTop: 35,
        }}
      >
        {loading ? (
          <button
            style={{ marginLeft: 5 }}
            onClick={handleSignUp}
            disabled={loading}
            className="button is-info is-loading"
          >
            SignUp
          </button>
        ) : (
          <button
            style={{ marginLeft: 5 }}
            onClick={handleSignUp}
            className="button is-info"
          >
            SignUp
          </button>
        )}
      </div>

      <div className="field" style={{ marginTop: 50 }}>
        <p className="control">
          <span className="block" style={{ alignSelf: "flex-end" }}>
            Already have an account?{" "}
            <Link to={{ pathname: "/login" }}>Login </Link>
          </span>
          instead.
        </p>
      </div>
    </div>
  );
}

export default SignUp;
