import React from "react";
import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

const Action = () => {
  return (
    <div class="d-flex justify-content-around">
      <div>
      <Button color="black" size="sm" block>
        text
      </Button>
      <Button color="black" size="sm" block>
        text
      </Button>
      <Button color="black" text="rgb(12, 177, 26)" size="sm" block>
        text
      </Button>
      </div>
    <div>
      <Card>
        <CardBody>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
        </CardBody>
      </Card>
      </div>
      </div>
  );
};

export default Action;;
