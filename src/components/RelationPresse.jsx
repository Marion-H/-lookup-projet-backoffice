/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Container, Spinner, Col } from "reactstrap";
import Axios from "axios";
import BaseCardRelationPresse from "./builders/BaseCardRelationPresse";
import AddPresse from "./builders/AddPresse";
const RelationPresse = ({ uuid, titre, descriptif, picture }) => {
  const [relationPressDatas, setRelationPressDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getPress = async () => {
    try {
      const res = await Axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press"
      );
      setRelationPressDatas(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getPress();
  }, []);

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Relation Presse</h1>
      </Row>
      <Row>
        {relationPressDatas.map((it) => (
          <Col md="4" sm="6" xs="12" className="pb-4">
            <BaseCardRelationPresse
              key={it.uuid}
              uuid={it.uuid}
              titre={it.title}
              descriptif={it.description}
              picture={it.picture}
              getPress={getPress}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <AddPresse getPress={getPress} />
      </Row>
    </Container>
  );
};

export default RelationPresse;
