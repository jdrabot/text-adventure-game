import React, { useState } from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Room = ({  displayedNode  }) => {
  return (
    <div class="row justify-content-center align-items-center">
      <Card className="cards">
        <CardBody>
          <CardTitle tag="h5">Location</CardTitle>
        </CardBody>
        <img
          src={`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : 'http://localhost:3000'}${displayedNode.imgSrc}`}
          alt="Card image cap"
          width="500px"
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
