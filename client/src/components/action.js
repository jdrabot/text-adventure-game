import React from "react";
import { Button } from "reactstrap";
import { useStoreContext } from '../store/store';
import { SET_CHARACTER } from '../store/actions';


const Action = ({
  displayedNode,
  textNodeId,
  setTextNodeId,
  setInventory,
  inventory,
  setTextNodeMaster,
  textNodeMaster,
  textNodeMasterConstant,
}) => {
  const [state, dispatch] = useStoreContext();
  const handleClick = (obj) => {

    if (obj.hitFunction) {
      obj.hitFunction.forEach(text => {
        switch (text) {
          case "SET_INVENTORY":
            setInventory({
              ...inventory,
              ...obj.setInventory,
            });
      
            const objIndex = textNodeMaster.findIndex((obj) => obj.id === textNodeId);
      
            const alteredObj = displayedNode;
            // need to toggle on other options
            if (obj.optionsToDisplayFalse) {
              obj.optionsToDisplayFalse.forEach(indexToChangeDisplay => {
                alteredObj.options[indexToChangeDisplay].display = false;
              });
              
            }
            if (obj.optionsToDisplayTrue) {
              obj.optionsToDisplayTrue.forEach(indexToChangeDisplay => {
                alteredObj.options[indexToChangeDisplay].display = true;
              });
              
            }
      
            setTextNodeMaster([
              ...textNodeMaster,
              (textNodeMaster[objIndex] = alteredObj),
            ]);
      
            break;
          
          case "RESTART":
            setInventory({});
            setTextNodeMaster(textNodeMasterConstant);
            setTextNodeId(obj.nextText);
            return;
          
          case "SET_CHARACTER":
    
            dispatch({
              type: SET_CHARACTER,
              character: {
                ...state.character,
                class: obj.text,
                imgSrc: obj.imgSrc,
                HP: obj.HP
              }
            })
            
            break;
          
        }

      })
    }

    setTextNodeId(obj.nextText);
  };

  return (
    <div class="d-flex justify-content-around">
      <div class="btn">
        {displayedNode.options.map((obj) => {
          if (!obj.display) return;
          return (
            <Button
              // style="margin:5px"
              onClick={() => handleClick(obj)}
              className="action-button"
              color="black"
              size="lg"
              // block
            >
              {obj.text}
            </Button>
          );
        })}
      </div>
    </div>
  );
};

export default Action;;
