import React from "react";
import ModaleServices from "./ModaleServices";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

const BaseCardServices = ({ descriptif, logo, titre, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <ModaleServices
            uuid={uuid}
            title={titre}
            logo={logo}
            description={descriptif}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardServices;
