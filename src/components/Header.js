import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className='head-bar'>
      <Link to="/">Animal Galery</Link>
      <div id="page-title">{props.title}</div>
    </header>
  );
};

export default Header;
