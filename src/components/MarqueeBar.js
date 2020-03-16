import React, { useState } from "react";
import LinkMarquee from "./LinkMarquee";

const MarqueeBar = props => {
  const {
    elementDimensions: { width = 0 } = {},
    position: { x = 0 } = {}
  } = props;

  const [marqueWidth, setMarqueWidth] = useState(0);

  return (
    <>
      <div>marqueWidth: {marqueWidth}</div>
      <div>width: {width}</div>
      <div>x: {x}</div>
      <LinkMarquee
        onSize={size => {
          setMarqueWidth(size.width);
        }}
      >
        {" "}
        {props.children}
      </LinkMarquee>
    </>
  );
};

export default MarqueeBar;
