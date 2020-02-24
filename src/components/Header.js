import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <header className='head-bar'>
      <Link href="/">Animal Galery</Link>
      <div>{props.title}</div>
    </header>
  );
};

export default Header;
