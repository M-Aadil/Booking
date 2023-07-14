import React from 'react';
import {
    faAddressBook,
    faBed,
    faHotel  
  } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./lnavbar.scss"

const Navbar = () => {
  return (
    <nav className="lnavbar">
      <div className="lnavbar-container">
        <a href="/" className="login-logo">Ebooking.com</a>
        <ul className="lnav-links">
          <li  className="listItem"><FontAwesomeIcon icon={faBed} /><a href="/">Home</a></li>
          <li  className="listItem"><FontAwesomeIcon icon={faHotel} /><a href="/hotels">Hotels</a></li>
          <li  className="listItem"> <FontAwesomeIcon icon={faAddressBook} /><a href="/contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
