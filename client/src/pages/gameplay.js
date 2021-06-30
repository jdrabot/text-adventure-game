import React, { useState, useEffect } from "react";
import Action from "../components/action";
import Character from "../components/character";
import Room from "../components/room";

import textNodes from '../game/textNodes';


function Gameplay() {
  console.log(textNodes);

  const [textNodeId, setTextNodeId] = useState(1);

  const found = textNodes.find((val) => val.id === textNodeId);


  const [displayedNode, setDisplayed] = useState(found);

  useEffect(() => {
    const found = textNodes.find((val) => val.id === textNodeId);
    setDisplayed(found)
  }, [textNodeId])



  return (
    <div>
      <Character />
      <Room displayedNode={displayedNode}/>
      <Action setDisplayed={setDisplayed} setTextNodeId={setTextNodeId} displayedNode={displayedNode} />
    </div>
  );
}

export default Gameplay;