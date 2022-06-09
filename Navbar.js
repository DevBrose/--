import "./Navbarstyle.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);

  return (
    <div className="header">
      <h1>Portfolio</h1>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home </Link>
          <Link to="/About">About </Link>
          <Link to="/Contact">Contact </Link>
        </li>
      </ul>

      <div className="hamburger"></div>
    </div>
  );
};

export default Navbar;
