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
import ModalPartenaires from "./ModalPartenaires";
import DeletePartenaire from "./DeletePartenaire";

const BaseCardPartenaires = ({ descriptif, logo, titre, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Row>
            <Col xs="12" className="pb-2">
              <ModalPartenaires
                uuid={uuid}
                title={titre}
                description={descriptif}
                logo={logo}
              />
            </Col>
            <Col xs="12" className="pb-2">
              <DeletePartenaire uuid={uuid} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardPartenaires;
