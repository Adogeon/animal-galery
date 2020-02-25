import React from "react";

import { Link, useParams } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";

import content from "../data/data.json";

const BiomePage = () => {
  const params = useParams();
  const data = content[params.key];

  return (
    <>
      <Header title={data.title} />
      <NavBar />
      <main>
        <div id="biome-intro">{data.desc}</div>
        <div id="galery">
          {data.species.map(species => {
            return (
              <Link>
                <img src={species.imgURL} alt="thumbnail"></img>
              </Link>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default BiomePage;
