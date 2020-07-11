import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";
import ModalPartenaires from "./ModalPartenaires";
import DeletePartenaire from "./DeletePartenaire";

const BaseCardPartenaires = ({
  descriptif,
  logo,
  titre,
  uuid,
  getPartenaire,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Row>
            <ModalPartenaires
              uuid={uuid}
              title={titre}
              description={descriptif}
              logo={logo}
              getPartenaire={getPartenaire}
            />
            <DeletePartenaire uuid={uuid} getPartenaire={getPartenaire} />
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardPartenaires;
