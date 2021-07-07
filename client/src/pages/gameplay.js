import React, { useState, useEffect } from "react";
import Action from "../components/action";
import Character from "../components/character";
import Room from "../components/room";

import textNodes from '../game/textNodes';


function Gameplay() {
  console.log(textNodes);
  const [textNodeMasterConstant, setTextNodeMasterConstant] =
    useState(textNodes);
  const [textNodeMaster, setTextNodeMaster] = useState(textNodes);
  const [textNodeId, setTextNodeId] = useState(1);
  const found = textNodeMaster.find((val) => {
    console.log(val);
    console.log(textNodeId);
    return val.id === textNodeId;
  });
  console.log(found);
  const [displayedNode, setDisplayed] = useState(found);
  const [inventory, setInventory] = useState({});


  useEffect(() => {
    const found = textNodeMaster.find((val) => val.id === textNodeId);
    setDisplayed(found)
  }, [textNodeId])



  return (
    <div>
      <Room displayedNode={displayedNode} />
      <Action
        textNodeMasterConstant={textNodeMasterConstant}
        textNodeId={textNodeId}
        textNodeMaster={textNodeMaster}
        setTextNodeMaster={setTextNodeMaster}
        setInventory={setInventory}
        inventory={inventory}
        setDisplayed={setDisplayed}
        setTextNodeId={setTextNodeId}
        displayedNode={displayedNode}
      />
    </div>
  );
}

export default Gameplay;