import React from "react";
import { Card, CardText, CardBody, CardTitle } from "reactstrap";

const Enemy = () => {
  return (
    <div class="d-flex justify-content-around">
      <div>
        <Card className="cards" style={{ width: "300px", height: "300px" }}>
          <CardBody>
            <CardTitle tag="h5">Enemy Name</CardTitle>
          </CardBody>
          <img width="100%" src="/assets/318x180.svg" alt="Card image cap" />
          <CardBody>
            <CardText>HP:</CardText>
          </CardBody>
        </Card>
      </div>      
    </div>
  );
};

export default Enemy;
