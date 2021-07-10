import React from "react";
import { Card, CardText, CardBody } from "reactstrap";
import Character from "./character";
const imgRoot = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "https://safe-cliffs-00867.herokuapp.com/";

const Room = ({ displayedNode }) => {
  return (
    <div class="row justify-content-center align-items-top">
      <div>
        <Character />
      </div>
      <Card className="roomCard">
        <img
          src={`${imgRoot}${displayedNode.imgSrc}`}
          alt="Card image cap"
          width="622px"
          height="350px"
          class="center"
        />
        <CardBody>
          <CardText id="text">{displayedNode.text}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default Room;
