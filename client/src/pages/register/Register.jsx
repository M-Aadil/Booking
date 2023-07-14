// import React from 'react'
import axios from "axios";
import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import "./register.css"
// import Navbar from "./Login_Navbar";
import LoginNavbar from "../loginNavbar/Login_Navbar";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [credentials, setCredentials] = useState({
        username: null,
        email: null,
        password: null,
        country: null,
        city: null,
        phone: null,
        img: null

    });


    const { loading, error, dispatch } = useContext(AuthContext);

     const navigate = useNavigate();


    const handleChange = (e) => {
        setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
    };


    // const handleClick = async (e) => {
    //     e.preventDefault();
    //     dispatch({ type: "LOGIN_START" });
    //     try {
    //         const res = await axios.post("auth/register", credentials);
    //         dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
    //         Navigate("/login")
    //     } catch (err) {
    //         dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    //     }
    // };

    const handleClick = async (e) => {
        e.preventDefault();
            dispatch({ type: "LOGIN_START" });
         try {
            const res = await axios.post("auth/register", credentials);
            dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details });
            navigate("/login")
         } catch (err) {
             dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
         }
    };





    return (
        <div className="Rlogin">
            <LoginNavbar />
            <h2>Create an account!</h2>
            {/* <div className="lContainer"> */}
            <div className="Rform-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    placeholder="username"
                    id="username"
                    onChange={handleChange}
                    className="lInput"
                />
            </div>
            <div className="Rform-group">
                <label htmlFor="email">Email Address:</label>
                <input
                    type="email"
                    placeholder="email"
                    id="email"
                    onChange={handleChange}
                    className="lInput"
                    required
                />
            </div>
            <div className="Rform-group">
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    placeholder="password"
                    id="password"
                    onChange={handleChange}
                    className="lInput"
                />
            </div>
            <div className="Rform-group">
                <label htmlFor="country">Country:</label>
                <input
                    type="text"
                    placeholder="country"
                    id="country"
                    onChange={handleChange}
                    className="lInput"
                />
            </div>
            <div className="Rform-group">
                <label htmlFor="city">City:</label>
                <input
                    type="text"
                    placeholder="city"
                    id="city"
                    onChange={handleChange}
                    className="lInput"
                />
            </div>
            <div className="Rform-group">
                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    placeholder="phone"
                    id="phone"
                    onChange={handleChange}
                    className="lInput"
                />
            </div>
             <div className="Rform-group">
                <label htmlFor="img">Image:</label>
                <input
                    type="file"
                    accept="image/*"
                    id="img"
                    // onChange={handleImageUpload}
                    className="lInput"
                />
            </div> 

            <button type="submit" disabled={loading} onClick={handleClick} className="lButton">
                Register
            </button>
            {error && <span>{error.message}</span>}
            {/* </div> */}
        </div>
    );
};

export default Register;
