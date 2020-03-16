import React from "react";
import sizeMe from "react-sizeme";

const LinkMarquee = props => {
  return <ul className="link-marquee">{props.children}</ul>;
};

export default sizeMe()(LinkMarquee);
