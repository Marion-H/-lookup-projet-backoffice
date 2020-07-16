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

const BaseCardPartenaires = ({
  descriptif,
  logo,
  link,
  uuid,
  getPartenaire,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{link}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Row>
            <Col xs="12" className="pb-2">
              <ModalPartenaires
                uuid={uuid}
                link={link}
                description={descriptif}
                logo={logo}
                getPartenaire={getPartenaire}
              />
            </Col>
            <Col xs="12" className="pb-2">
              <DeletePartenaire uuid={uuid} getPartenaire={getPartenaire} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardPartenaires;
