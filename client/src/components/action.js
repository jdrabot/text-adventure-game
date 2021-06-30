import React from "react";
import { Button } from 'reactstrap';
import {
  Card, CardText, CardBody,
} from 'reactstrap';

const Action = ({ displayedNode, setTextNodeId }) => {

  return (
    <div class="d-flex justify-content-around">
      <div>
        {displayedNode.options.map(obj => {
          return (
            <Button onClick={() => setTextNodeId(obj.nextText)} className="action-button" color="black" size="lg" block>
              {obj.text}
            </Button>
          )
        })

        }
      </div>
      {/* <div>
        <Card className="cards">
          <CardBody>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
          </CardBody>
        </Card>
      </div> */}
    </div>
  );
};

export default Action;;
