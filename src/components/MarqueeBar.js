import React, { useState, useEffect } from "react";
import LinkMarquee from "./LinkMarquee";

const MarqueeBar = props => {
  const {
    elementDimensions: { width = 0 } = {},
    position: { x = 0 } = {},
    isActive = false
  } = props;

  const [translatePercent, setTranslatePercent] = useState(0);

  useEffect(() => {
    let temp = translatePercent;
    let timer = false;
    if (isActive) {
      timer = setInterval(() => {
        if (x >= width / 2 && temp >= -250) {
          temp -= 0.045;
          setTranslatePercent(temp);
        } else if (x < width / 2 && temp < 0) {
          temp += 0.045;
          setTranslatePercent(temp);
        }
      }, 1);
    }
    return () => clearInterval(timer);
  }, [isActive, x]);

  return (
    <>
      <LinkMarquee
        data={props.data}
        childrenStyle={{ transform: "translateX(" + translatePercent + "%)" }}
      />
    </>
  );
};

export default MarqueeBar;
