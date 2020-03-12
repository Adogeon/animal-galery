import React from "react";
import { useParams, useHistory } from "react-router-dom";
import Header from "../components/Header";
import content from "../data/species.json";

const SpeciesPage = () => {
  const params = useParams();
  const data = content[params.key];
  const history = useHistory();

  const goBackOnClick = event => {
    event.preventDefault();
    history.goBack();
  };

  return (
    <div className="wrapper">
      <Header title={data.name} />
      <div className="slide-wrapper">
        <div>
          <div className="hid-box"></div>
          <div className="return-bar">
            <button className="return-button"onClick={goBackOnClick}>
              Close X
            </button>
          </div>
          <main>
            <h1>{data.name}</h1>
            <section className="species-article">
              <div className="img-wrapper">
                <img src={data.imgURL} alt="species" />
              </div>
              <div className="species-detail">
                <div className="sci-name">{data["sci-name"]}</div>
                <div className="status">Conservation Status:{data.status}</div>
                <p>{data.des}</p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SpeciesPage;
