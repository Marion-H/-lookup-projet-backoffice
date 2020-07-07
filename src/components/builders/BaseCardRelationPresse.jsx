import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import ModalPresse from "./ModalPresse";

const BaseCardRelationPresse = ({ descriptif, picture, titre, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <ModalPresse
            uuid={uuid}
            title={titre}
            description={descriptif}
            picture={picture}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardRelationPresse;
