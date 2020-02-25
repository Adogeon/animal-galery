import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BiomePage from "./pages/BiomePage";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/biome/:key">
            <BiomePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
