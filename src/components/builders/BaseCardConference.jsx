import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row,
} from "reactstrap";
import ModalConferences from "./ModalConference";

import DeleteConference from "./DeleteConference";

const BaseCardConference = ({
  subject,
  date,
  titre,
  picture,
  uuid,
  getConference,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={titre} />
        <CardBody>
          <CardTitle>{titre}</CardTitle>
          <CardSubtitle>Date: {date}</CardSubtitle>
          <CardText>sujet: {subject}</CardText>
          <Row>
            <ModalConferences
              title={titre}
              subject={subject}
              date={date}
              picture={picture}
              uuid={uuid}
              getConference={getConference}
            />
            <DeleteConference uuid={uuid} getConference={getConference} />
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardConference;
