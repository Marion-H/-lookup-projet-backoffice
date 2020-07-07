import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
} from "reactstrap";

const BaseCardProduct = ({ descriptif, logo, name, price }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={logo} alt={descriptif} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <CardSubtitle>prix: {price}</CardSubtitle>
          <Button> Go! </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardProduct;
