import React, { useState } from "react";
import "./CSS/LoginSignup.css";

export const LoginSignup = () => {
  const [state, setState] = useState("LogIn");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const changeHandeler = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const login = async () => {
    console.log("LogIn Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };
  const signup = async () => {
    console.log("SignUp Function Executed", formData);
    let responseData;
    await fetch("http://localhost:4000/signup", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((data) => (responseData = data));

    if (responseData.success) {
      localStorage.setItem("auth-token", responseData.token);
      window.location.replace("/");
    } else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state === "SignUp" ? (
            <input
              name="username"
              value={formData.username}
              onChange={changeHandeler}
              type="text"
              placeholder=" Your Name "
            />
          ) : (
            <></>
          )}
          <input
            name="email"
            value={formData.email}
            onChange={changeHandeler}
            type="email"
            placeholder="Your Email Id "
          />
          <input
            name="password"
            value={formData.password}
            onChange={changeHandeler}
            type="password"
            placeholder="Password"
          />
        </div>
        <button
          onClick={() => {
            state === "LogIn" ? login() : signup();
          }}
        >
          Continue
        </button>
        {state === "SignUp" ? (
          <p className="loginsignup-login">
            Already have an account ?{" "}
            <span
              onClick={() => {
                setState("LogIn");
              }}
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account ?{" "}
            <span
              onClick={() => {
                setState("SignUp");
              }}
            >
              SignUp here
            </span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>I agree to the terms and conditions of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};
