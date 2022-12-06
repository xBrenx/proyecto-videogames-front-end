import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../../Components/SearchBar/SearchBar";
import "./Nav.css";

export default function Nav() {
  return (
    <div className="Nav" style={{textAlign: "center"}}>
      <Link to="/">
        <button className="btn">

            Start
        
        </button>
      </Link>
      <SearchBar />
      <Link to="/videogames">
        <button className="btn">
            Games
        </button>
      </Link>
      <Link to="/create">
        <button className="btn">
          
            Create
    
        </button>
      </Link>
    </div>
  );
}
