import React from "react";

import { Link, useParams } from "react-router-dom";

import Header from "../components/Header";
import NavBar from "../components/NavBar";
import content from "../data/data.json";

const BiomePage = () => {
  const params = useParams();
  const data = content[params.key];
  const backColor = { "background-color": data["bg-color"] };

  return (
    <div className={"wrapper"}>
      <Header title={data.title} />
      <div className={"slide-wrapper"}>
        <div className={"hid-box"}></div>
        <NavBar />
        <main style={backColor}>
          <div id="galery">
            {data.species.map(species => {
              return (
                <Link to={`/species/${species.linkId}`}>
                  <img src={species.imgURL} alt="thumbnail"></img>
                </Link>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default BiomePage;
