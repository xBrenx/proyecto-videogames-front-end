import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

export default function Nav({handleSearch}) {
  return (
    <div className="Nav" style={{textAlign: "center"}}>
      <Link to="/">
        <button className="btn">

            Start
        
        </button>
      </Link>
      
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

      <Link to="/create">
        <button className="btn">
          
            Create
    
        </button>
      </Link>
    </div>
  );
}
