import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import ModalPartenaires from "./ModalPartenaires";

const BaseCardPartenaires = ({ descriptif, logo, titre, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <ModalPartenaires
            uuid={uuid}
            title={titre}
            description={descriptif}
            logo={logo}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardPartenaires;
