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
  getLookupDatas,
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
          <CardText>Telephone: {phone}</CardText>
          <CardText>siret: {siret}</CardText>
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
            getLookupDatas={getLookupDatas}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardLookup;
