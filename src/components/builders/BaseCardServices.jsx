import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const BaseCardServices = ({ descriptif, logo, titre }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Button> Go! </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardServices;
