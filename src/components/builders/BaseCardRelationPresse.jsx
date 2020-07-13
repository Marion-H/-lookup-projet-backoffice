import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Row,
  Col,
} from "reactstrap";
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
            <Col xs="12" className="pb-2">
              <ModalPresse
                uuid={uuid}
                title={titre}
                description={descriptif}
                picture={picture}
                getPress={getPress}
              />
            </Col>
            <Col xs="12" className="pb-2">
              <DeletePress uuid={uuid} getPress={getPress} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardRelationPresse;
