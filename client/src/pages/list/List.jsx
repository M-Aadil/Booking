import "./list.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import { SearchContext } from "../../context/SearchContext";
// import { useNavigate } from "react-router-dom";
import React from 'react';
// import { useHistory } from 'react-router-dom';

const List = () => {
  const location = useLocation();
   const [destination, setDestination] = useState(location.state.destination);
   const [dates, setDates] = useState(location.state.dates);
  const [openDate, setOpenDate] = useState(false);
  const [options, setOptions] = useState(location.state.options);
  const [min, setMin] = useState(undefined);
  const [max, setMax] = useState(undefined);
  // const history = useHistory();
  // const [dates, setDates] = useState([
  //   {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // ]);

  const navigate = useNavigate();
  const { dispatch } = useContext(SearchContext);

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
     navigate("#", { state: { destination, dates, options } });
  };

  const { data, loading, error, reFetch } = useFetch(
     `/hotels?city=${destination}&min=${min || 0}&max=${max + 1 || 999}`
    // `/hotels?min=${min || 0}&max=${max + 1 || 999}`
  );


  // const navigate = useNavigate();
  // const { dispatch } = useContext(SearchContext);

  const handleClick = () => {
    // dispatch({ type: "NEW_SEARCH", payload: { destination, dates } });
    // navigate("/hotels", { state: { destination, dates, options } });
    reFetch();
  };

  


  return (


    <div>
      <Navbar />
      <Header type="list" />

      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label style={{ marginBottom: "0.5px" }}>Destination</label>
              <label>Available: Berlin, Madrid & London.</label>
              <input placeholder={destination}
                onChange={(e) => setDestination(e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1).toLowerCase())}
                className="capitalized" type="text" />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  editableDateInputs={true}
                  onChange={(item) => setDates([item.selection])}
                  moveRangeOnFirstSelection={false}
                  ranges={dates}
                  // className="date"
                  minDate={new Date()}
                />
                //  <DateRange
                //     editableDateInputs={true}
                //     // onChange={(e) => setDates(e.target.value)}
                //     onChange={(item) => setDates([item.selection])}
                //     // moveRangeOnFirstSelection={false}
                //     minDate={new Date()}
                //     ranges={dates}
                //     // className="date"

                //   />
                // <DateRange
                //   // editableDateInputs={true}
                //   onChange={(item) => setDates([item.selection])}
                //   minDate={new Date()}
                //   ranges={dates}
                // />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night (&gt; <strong>$105</strong>)</small>
                  </span>
                  <input type="number" onChange={(e) => setMin(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night (&lt; <strong>$999</strong>)</small>
                  </span>
                  <input type="number" onChange={(e) => setMax(e.target.value)} className="lsOptionInput" />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                  />
                </div>
              </div>
            </div>
            <button onClick={() => {
              handleSearch();
              handleClick();
            }}>Search</button>
          </div>
          <div className="listResult">
            {loading ? "loading" : <>
              {data.map(item => (
                <SearchItem item={item} key={item._id} />
              ))}
            </>}


          </div>
        </div>
      </div>
    </div>
  );
};

export default List
