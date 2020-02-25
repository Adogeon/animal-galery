import React from "react";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";
import Header from "../components/Header";

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
              <ul className="link-marquee">
                {biome.species.map(species => {
                  return (
                    <li>
                      <Link>
                        {species.name}
                        <img src={species.imgURL} alt="sm-img"></img>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            );
          })}
        </div>
      </main>
      <NavBar />
    </>
  );
};

export default HomePage;
