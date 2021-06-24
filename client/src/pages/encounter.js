import React from "react";
import Banner from "../components/Banner";
import Character from "../components/character";
import Enemy from "../components/Enemy";

function Encounter() {
  return (
    <div>
      <Character />
      <Enemy />
      <Action />
    </div>
  );
}

export default Encounter;
