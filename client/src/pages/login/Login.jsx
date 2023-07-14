// import React from 'react'
import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./login.css"
// import Navbar from "./Login_Navbar";
import LoginNavbar from "../loginNavbar/Login_Navbar";

const Login = () => {
    const [credentials, setCredentials] = useState({
      username: null,
      password: null,
    });


const {loading, error, dispatch } = useContext(AuthContext);

const navigate = useNavigate();


const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };


  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", credentials);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});
      navigate("/")
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    }
  };



return (
    <div className="login">
       <LoginNavbar/>
       <h2>Login into your account!</h2>
      {/* <div className="lContainer"> */}
        <div className="form-group">
          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            placeholder="username"
            id="username"
            onChange={handleChange}
            className="lInput"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            placeholder="password"
            id="password"
            onChange={handleChange}
            className="lInput"
          />
        </div>
        <button type="submit" disabled={loading} onClick={handleClick} className="lButton">
          Login
        </button>
        {error && <span>{error.message}</span>}
      {/* </div> */}
    </div>
  );
};

export default Login;
