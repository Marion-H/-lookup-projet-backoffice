import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";

const BaseCardClients = ({
  uuid,
  companyName,
  streetNumber,
  streetName,
  city,
  postalCode,
  email,
  phone,
  siret,
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{companyName}</CardTitle>
          <CardSubtitle>Telephone: {phone}</CardSubtitle>
          <CardSubtitle>email: {email}</CardSubtitle>
          <CardSubtitle>siret: {siret}</CardSubtitle>
          <CardText>
            Adress: {streetNumber}, {streetName}, {city}, {postalCode}
          </CardText>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardClients;
