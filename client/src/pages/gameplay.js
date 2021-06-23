import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Banner from "../components/Banner";
import Character from "../components/character";
import Inventory from "../components/inventory";
import Room from "../components/room";
import Action from "../components/Action";
import Wrapper from "../components/Wrapper";

function Gameplay() {
  return (
    <Router>
      <div>
        <Banner />
        <Wrapper>
          <Route exact path="/" component={Character} />
          <Route exact path="/" component={Inventory} />
          <Route exact path="/" component={Room} />
          <Route exact path="/" component={Action} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default Gameplay;
