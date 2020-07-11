import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";
import ModalPresse from "./ModalPresse";
import DeletePress from "./DeletePress";

const BaseCardRelationPresse = ({
  descriptif,
  picture,
  titre,
  uuid,
  getPress,
}) => {
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
              getPress={getPress}
            />
            <DeletePress uuid={uuid} getPress={getPress} />
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardRelationPresse;
