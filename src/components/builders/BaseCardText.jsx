import React from "react";
import { Col, Row, Container } from "reactstrap";

const BaseCardText = ({ item, value, dataArray }) => {
  const checkImage = ({ dataArray }) => {
    for (let i = 0; i < Object.keys(dataArray[0]).length; i++) {
      if (item === "id") {
        return value;
      }
      if (item === "image") {
        return <img src={value} alt="product" />;
      }
      if (item !== "image" && item !== "id") {
        return value;
      }
    }
  };

  return (
    <Container>
      <Row>
        <Col lg="6">{item}</Col>
        <Col lg="6">{checkImage({ dataArray })}</Col>
      </Row>
    </Container>
  );
};

export default BaseCardText;
