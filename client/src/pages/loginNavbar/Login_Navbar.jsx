import React from 'react';
import {
  faAddressCard,
  faBed,
  faRightToBracket
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./login_navbar.css"

const handleLogoClick = () => {
  window.location.reload(); // Refreshes the page
};

const LoginNavbar = () => {
  return (
    <nav className="lnavbar">
      <div className="lnavbar-container">
        <a  className="login-logo" onClick={handleLogoClick}>Ebooking.com</a>
        <ul className="lnav-links">
          <li className="listItem"><FontAwesomeIcon icon={faBed} /><a href="/">Home</a></li>
          <li className="listItem"><FontAwesomeIcon icon={faAddressCard} /> <a href="/register">Register</a></li>
          <li className="listItem"><FontAwesomeIcon icon={faRightToBracket} /><a href="/login">Login</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default LoginNavbar;
