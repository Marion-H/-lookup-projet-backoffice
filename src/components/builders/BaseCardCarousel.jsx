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
import styles from "./CardStyle.module.css";

const BaseCardCarousel = ({ descriptif, picture, titre, link, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg
          className={styles.cardImg}
          top
          src={picture}
          alt={descriptif}
        />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle className={styles.title}>Lien: {link}</CardSubtitle>
          <CardText className={styles.description}>
            descriptif: {descriptif}
          </CardText>
          <ModalCarousel
            uuid={uuid}
            title={titre}
            description={descriptif}
            link={link}
            picture={picture}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardCarousel;
