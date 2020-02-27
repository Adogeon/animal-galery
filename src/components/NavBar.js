import React from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = props => {
  const active = {
    "font-style": "italic"
  };

  return (
    <ul className="nav-bar">
      <li>
        <Link>About</Link>
      </li>
      <li>
        <ul className="page-nav">
          <li>
            <NavLink exact to="/" activeStyle={active}>
              Overview
            </NavLink>
          </li>
          <li>
            <NavLink to="/biome/0" activeStyle={active}>
              Jungle
            </NavLink>
          </li>
          <li>
            <NavLink to="/biome/1" activeStyle={active}>
              Ocean
            </NavLink>
          </li>
          <li>
            <NavLink to="/biome/2" activeStyle={active}>
              Plain
            </NavLink>
          </li>
          <li>
            <NavLink to="/biome/3" activeStyle={active}>
              Desert
            </NavLink>
          </li>
          <li>
            <NavLink to="/biome/4" activeStyle={active}>
              Mountain
            </NavLink>
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
