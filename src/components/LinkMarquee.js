import React from "react";
import { Link } from "react-router-dom";

const LinkMarquee = props => {
  
  return (
    <ul className="link-marquee" style={props.childrenStyle}>
      {props.data.map((species, index) => {
        const { linkId, name, imgURL } = species;
        return (
          <li key={`${props.key} -${index}`}>
            <Link to={`/species/${linkId}`}>
              {name}
              <img src={imgURL} alt="sm-img"></img>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default LinkMarquee;
