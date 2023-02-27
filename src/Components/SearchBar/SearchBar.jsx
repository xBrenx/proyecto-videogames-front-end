import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getAllVideogames, searchVideoagame } from "../../Redux/Actions/actions";
import "./SearchBar.css"

export default function SearchBar({paginado, resetea }) {

  const [search, setSearch] = useState("")
  const dispatch = useDispatch();

  function handleSearch(search) {
   if(search === ""){
    paginado(1)
    dispatch(getAllVideogames())
   }else{
    paginado(1)
    console.log(search)
    dispatch(searchVideoagame(search));
   }
    
  };

  return (
    <div className="search">

      <div className="form">
        <input
          className="input"
          placeholder="Type your text"
          required=""
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="input-border"></span>
      </div>
      <button className="btn" onClick={() => handleSearch(search)}>Search</button>
    </div>
  );
}
