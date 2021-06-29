import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
import characterAvatar from "./images/characters/mage.gif";

const Character = () => {
  return (
    <div class="d-flex justify-content-around">
      <div>
        <Card className="cards" style={{ width: "150px", height: "150px" }}>
          <CardBody>
            <CardTitle tag="h5">Name</CardTitle>
          </CardBody>
          <img src={characterAvatar} alt="Card image cap" />
          <CardBody>
            <CardText>HP:</CardText>
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