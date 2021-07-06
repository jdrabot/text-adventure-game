import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import { useStoreContext } from "../store/store";

const Character = () => {
  const [state, dispatch] = useStoreContext();


  return (
    <div class="d-flex justify-content-around">
      <div>
        <Card className="cards" style={{ width: "150px", height: "150px" }}>
          <CardBody>
            <CardTitle tag="h5">{state.character.name}</CardTitle>
          </CardBody>
          <img src={state.character.imgSrc} alt="Card image cap" />
          <CardBody>
            <CardText>HP: {state.character.HP}</CardText>
          </CardBody>
        </Card>
      </div>
      <div>
        <h1>Inventory</h1>
      </div>
    </div>
  );
};


export default Character;