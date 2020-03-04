import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import HomePage from "./pages/HomePage";
import BiomePage from "./pages/BiomePage";
import "./App.scss";

function App() {
  return (
    <Router>
      <Route
        render={({ location }) => {
          return (
            <div className="App">
              <TransitionGroup className="animation-wrapper">
                <CSSTransition
                  key={location.key}
                  classNames="slide-in"
                  timeout={{
                    exit: 500,
                    enter: 2000
                  }}
                  unmountOnExit={true}
                >
                  <Switch location={location}>
                    <Route exact path="/">
                      <HomePage />
                    </Route>
                    <Route path="/biome/:key">
                      <BiomePage />
                    </Route>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            </div>
          );
        }}
      ></Route>
    </Router>
  );
}

export default App;
