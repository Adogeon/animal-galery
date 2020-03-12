import React from "react";
import Header from "../components/Header";
import data from "../data/species.json";

const SpeciesPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="slide-wrapper">
        <div>
          <div>
            ClosseBar
            <a href="#">Link to go back</a>
          </div>
          <main>
            <h1>Species Name</h1>
            <section className="species-article">
              <div className="img-wrapper">
                <img href="" alt="species" />
              </div>
              <div className="detail">
                <div>Scientific Name</div>
                <div>Conservation Status</div>
                <p>
                  ut tortor pretium viverra suspendisse potenti nullam ac tortor
                  vitae purus faucibus ornare suspendisse sed nisi lacus sed
                  viverra tellus
                </p>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default SpeciesPage;
