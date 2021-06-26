import React from "react";
import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

const Action = () => {
  return (
    <div class="d-flex justify-content-around">
      <div>
      <Button className="action-button" color="black" size="sm" block>
        text
      </Button>
      <Button className="action-button" color="black" size="sm" block>
        text
      </Button>
      <Button className="action-button" color="black" size="sm" block>
        text
      </Button>
      </div>
    <div>
      <Card className="cards">
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </div>
      </div>
  );
};

export default Action;;
