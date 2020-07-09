import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";
import ModalPresse from "./ModalPresse";
import DeletePress from "./DeletePress";

const BaseCardRelationPresse = ({ descriptif, picture, titre, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Row>
            <ModalPresse
              uuid={uuid}
              title={titre}
              description={descriptif}
              picture={picture}
            />
            <DeletePress uuid={uuid} />
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardRelationPresse;
