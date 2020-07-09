import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
import ModalLookup from "./ModalLookup";

const BaseCardLookup = ({
  uuid,
  companyName,
  streetName,
  streetNumber,
  postalCode,
  city,
  email,
  phone,
  siret,
}) => {
  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle>{companyName}</CardTitle>
          <CardSubtitle>email: {email}</CardSubtitle>
          <CardText>
            adresse: {streetNumber}, {streetName}, {city} {postalCode}
          </CardText>
          <ModalLookup
            uuid={uuid}
            companyName={companyName}
            streetName={streetName}
            streetNumber={streetNumber}
            postalCode={postalCode}
            city={city}
            email={email}
            phone={phone}
            siret={siret}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardLookup;
