import React from "react";
import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

const Action = () => {
  return (
    <div class="d-flex justify-content-between">
      <div style={{flexdirection: "column"}}>
      <Button color="secondary" size="lg">
   text
      </Button>
      <Button color="secondary" size="lg">
      text
      </Button>
      <Button color="secondary" size="lg">
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
