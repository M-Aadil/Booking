import "./navbar.css"
// import { Link } from "react-router-dom"
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faBed,
  faCalendarDays,
  faHotel,
  faPerson,

} from "@fortawesome/free-solid-svg-icons";
import { SearchContext } from "../../context/SearchContext";


// import axios from "axios";



const Navbar = ({ onClick, scrollToBottom }) => {
  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/login");
  };
  const handleRegister = () => {
    navigate("/register");
  };


  // hotels button configuration

  const [destination, setDestination] = useState("");
  const [openDate, setOpenDate] = useState(false);
  const [dates, setDates] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  });

  // const navigate = useNavigate();
  // const { user } = useContext(AuthContext);

  const handleOption = (name, operation) => {
    setOptions((prev) => {
      return {
        ...prev,
        [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
      };
    });
  };

  const { loading, error, dispatch } = useContext(AuthContext, SearchContext);
  const handlehotels = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    navigate("/list", { state: { destination, dates, options } });
  };

  // const {  } = useContext(AuthContext);
  const handleClick = () => {
    //  e.preventDefault();
    dispatch({ type: "LOGOUT" });
    // try {
    //   const res = await axios.post("/auth/login", credentials);
    //   dispatch({ type: "LOGIN_SUCCESS", payload: res.data.details});
    //   navigate("/")
    // } catch (err) {
    //   dispatch({ type: "LOGIN_FAILURE", payload: err.response.data });
    // }
  };

  // const handleLogoClick = () => {
  //   window.location.reload(); // Refreshes the page
  // };

  // const {loading, error, dispatch } = useContext(AuthContext);

  // const handleClick = async (e) => {
  //   e.preventDefault();
  //   dispatch({ type: "LOGOUT_START" });
  //   try {
  //     //const res = await axios.post("/auth/login", credentials);
  //     dispatch({ type: "LOGOUT_SUCCESS", payload: res.data.details});
  //    // navigate("/")
  //   } catch (err) {
  //     dispatch({ type: "LOGOUT_FAILURE", payload: err.response.data });
  //   }
  // };



  return (
    <div className="navbar">
      <div className="navContainer">
        <div>
          <a href='' className="logo" onClick={onClick}>Ebooking.com</a>
        </div>
        <span>
        {user ? user.username : (<div className="navItems">
          <button className="navButton" onClick={handleRegister}>Register</button>
          <button className="navButton" onClick={handleSearch}>Login</button>
        </div>
        )}
        {user && <button className="loButton" onClick={handleClick}>Logout</button>}
        </span>
      </div>
      <div style={{ marginBottom: "18px" }}></div>
      <div className="headerList">
        <div className="headerListItem home">
          <FontAwesomeIcon icon={faBed} />
          <Link to='/' style={{ color: 'inherit', textDecoration: 'none' }}>
            <p>Home</p>
          </Link>
        </div>
        <div className="headerListItem hotels">
          <FontAwesomeIcon icon={faHotel} />
          {/* <Link to='/list' style={{ color: 'inherit', textDecoration: 'none' }}> */}
          <p style={{ cursor: 'pointer' }} onClick={handlehotels} >Hotels</p>
          {/* <p style={{ cursor: 'pointer' }}  >Hotels</p> */}
          {/* </Link> */}
        </div>
        <div className="headerListItem contact">
          <FontAwesomeIcon icon={faAddressBook} />
          <p style={{ cursor: 'pointer' }} onClick={scrollToBottom}>Contact</p>
          {/* <p style={{ cursor: 'pointer' }} >Contact</p> */}
        </div>
      </div>
    </div>
  )
}

export default Navbar