import React from "react";
import { Link } from "react-router-dom";
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
          {data.map(biome => {
            return (
              <ReactCursorPosition
                activationInteractionMouse={INTERACTIONS.HOVER}
                className="horz-scroll"
              >
                <MarqueeBar>
                  {biome.species.map(species => {
                    return (
                      <li>
                        <Link to={`/species/${species.linkId}`}>
                          {species.name}
                          <img src={species.imgURL} alt="sm-img"></img>
                        </Link>
                      </li>
                    );
                  })}
                </MarqueeBar>
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
