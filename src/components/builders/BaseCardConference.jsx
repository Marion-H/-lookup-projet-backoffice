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

const BaseCardConference = ({ subject, date, titre, picture }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={titre} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle>Date: {date}</CardSubtitle>
          <CardText>sujet: {subject}</CardText>
          <Button> Go! </Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardConference;
