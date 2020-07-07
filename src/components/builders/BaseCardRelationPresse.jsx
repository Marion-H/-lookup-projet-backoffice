import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const BaseCardRelationPresse = ({ descriptif, picture, titre, price }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Button> Go! </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardRelationPresse;
