import React from "react";
import { Col, Row, Container } from "reactstrap";

const BaseCardImage = ({ item, value }) => {
  return (
    <Container>
      <Row>
        <Col>{item}</Col>
        <Col>
          <img src={value} alt="product" />
        </Col>
      </Row>
    </Container>
  );
};

export default BaseCardImage;
