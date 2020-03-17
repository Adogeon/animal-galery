import React from "react";
import ReactCursorPosition, { INTERACTIONS } from "react-cursor-position";

import NavBar from "../components/NavBar";
import Header from "../components/Header";
import MarqueeBar from "../components/MarqueeBar";

import content from "../data/data.json";

const HomePage = () => {
  const data = content;
  return (
    <>
      <Header title={"Overview"}></Header>
      <main id="overview-main">
        <div id="intro-para">
          A small galery demonstrate the diverse fauna of Earth.
        </div>
        <div id="link-list">
          {data.map((biome, index) => {
            return (
              <ReactCursorPosition
                activationInteractionMouse={INTERACTIONS.HOVER}
                className="horz-scroll"
                key={`biome-${index}`}
              >
                <MarqueeBar data={biome.species} />
              </ReactCursorPosition>
            );
          })}
        </div>
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
