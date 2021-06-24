import React from 'react';
import {
  Card,
  CardText,
  CardBody,
  CardLink,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

const Character = () => {

  return (
    <div class="d-flex justify-content-between">
      <div>
      <Card style={{width:"300px", height:"300px"}}>
        <CardBody>
          <CardTitle tag="h5">Character Name</CardTitle>
        </CardBody>
        <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
        <CardBody>
          <CardText>
       HP:
          
          </CardText>
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