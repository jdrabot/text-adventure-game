import React from "react";
import Action from "../components/action";
import Character from "../components/character";
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