import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Room = () => {
  return (
    <div class="row justify-content-center align-items-center">
      <Card className="cards">
        <CardBody>
          <CardTitle tag="h5">Location</CardTitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>DIALOG</CardText>
        </CardBody>
      </Card>
    </div>
  );
};


export default Room;