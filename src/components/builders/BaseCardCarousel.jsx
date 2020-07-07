import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

const BaseCardCarousel = ({ descriptif, picture, titre, link }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle>Lien: {link}</CardSubtitle>
          <CardText>descriptif: {descriptif}</CardText>
          <Button> Go! </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardCarousel;
