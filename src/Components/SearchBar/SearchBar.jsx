import React from "react";
import { useDispatch } from "react-redux";
import { searchVideoagame } from "../../Redux/Actions/actions";
import "./SearchBar.css"

export default function SearchBar() {
  const dispatch = useDispatch();

  function handleSearch(e) {
    console.log(e.target.value);
    dispatch(searchVideoagame(e.target.value));
  }

  return (
    <div>
      <div className="form">
        <input
          className="input"
          placeholder="Type your text"
          required=""
          type="text"
          onChange={(e) => handleSearch(e)}
        />
        <span className="input-border"></span>
      </div>
    </div>
  );
}
