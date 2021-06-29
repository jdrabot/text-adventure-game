import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import roomImage from "./images/locations/kitchen.jpeg";

const Room = () => {
  return (
    <div class="row justify-content-center align-items-center">
      <Card className="cards">
        <CardBody>
          <CardTitle tag="h5">Location</CardTitle>
        </CardBody>
        <img src={roomImage} alt="Card image cap" />
        <CardBody>
          <CardText id="text">Text</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default Room;