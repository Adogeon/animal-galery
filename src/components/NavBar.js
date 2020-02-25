import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  return (
    <ul className="nav-bar">
      <li>
        <Link>About</Link>
      </li>
      <li>
        <ul className="page-nav">
          <li>
            <Link to="/">Overview</Link>
          </li>
          <li>
            <Link to="/biome/0">Jungle</Link>
          </li>
          <li>
            <Link to="/biome/1">Ocean</Link>
          </li>
          <li>
            <Link to="/biome/2">Plain</Link>
          </li>
          <li>
            <Link to="/biome/3">Desert</Link>
          </li>
          <li>
            <Link to="/biome/4">Mountain</Link>
          </li>
        </ul>
      </li>
      <li>
        <Link>Search</Link>
      </li>
    </ul>
  );
};

export default NavBar;
