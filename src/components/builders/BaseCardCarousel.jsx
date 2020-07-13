import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ModalCarousel from "./ModalCarousel";

const BaseCardCarousel = ({
  descriptif,
  picture,
  titre,
  link,
  uuid,
  getCarousel,
}) => {
  return (
    <div>
      <Card>
        <CardImg top src={picture} alt={descriptif} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle>Lien: {link}</CardSubtitle>
          <CardText>descriptif: {descriptif}</CardText>
          <ModalCarousel
            uuid={uuid}
            title={titre}
            description={descriptif}
            link={link}
            picture={picture}
            getCarousel={getCarousel}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardCarousel;
