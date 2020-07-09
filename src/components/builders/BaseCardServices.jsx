import React from "react";
import ModaleServices from "./ModaleServices";
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";
import DeleteService from "./DeleteService";

const BaseCardServices = ({ descriptif, logo, titre, uuid, getService }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Row>
            <ModaleServices
              uuid={uuid}
              title={titre}
              logo={logo}
              description={descriptif}
              getService={getService}
            />
            <DeleteService uuid={uuid} getService={getService} />
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardServices;
