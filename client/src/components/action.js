import React from "react";
import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

const Action = ({ displayedNode, textNodeId ,setTextNodeId, setInventory, inventory, setTextNodeMaster, textNodeMaster }) => {
  const handleClick = (obj) => {
    if (obj.setInventory) {
      setInventory({
        ...inventory,
        ...obj.setInventory,
      });

      const objIndex = textNodeMaster.findIndex(obj => obj.id === textNodeId)

      const alteredObj = displayedNode;
// need to toggle on other options
      obj.setInventory.optionsToDisplayFalse.forEach(indexToChangeDisplay => {
        alteredObj.options[indexToChangeDisplay].display = false;
      });

      setTextNodeMaster([
        ...textNodeMaster,
        textNodeMaster[objIndex] = alteredObj
      ])
    }
    setTextNodeId(obj.nextText);
  };

  return (
    <div class="d-flex justify-content-around">
      <div>
        {displayedNode.options.map((obj) => {
          if(!obj.display) return
          return (
            <Button
    
                       onClick={() => handleClick(obj)}
   
                        className="action-button"
  
                         color="black"

                           size="lg"
            
               block
            
            >
              {obj.text}
            </Button>
          );;
        })}
      </div>
      {/* <div>
        <Card className="cards">
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
};

export default Action;;
