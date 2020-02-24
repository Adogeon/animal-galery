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
            <Link href="/">Overview</Link>
          </li>
          <li>
            <Link>Jungle</Link>
          </li>
          <li>
            <Link>Ocean</Link>
          </li>
          <li>
            <Link>Plain</Link>
          </li>
          <li>
            <Link>Ocean</Link>
          </li>
          <li>
            <Link>Mountain</Link>
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
