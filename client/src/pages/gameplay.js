import React from "react";
import Action from "../components/action";
import Banner from "../components/Banner";
import Character from "../components/character";
// import Inventory from "../components/inventory";
import Room from "../components/room";

function Gameplay() {
  return (
    <div>
        <Character />
      <Room />
      <Action />
      
      </div>
  );
}

export default Gameplay;
