import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ModalConferences from "./ModalConference";

const BaseCardConference = ({ subject, date, titre, picture, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={titre} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle>Date: {date}</CardSubtitle>
          <CardText>sujet: {subject}</CardText>
          <ModalConferences
            title={titre}
            subject={subject}
            date={date}
            picture={picture}
            uuid={uuid}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardConference;
