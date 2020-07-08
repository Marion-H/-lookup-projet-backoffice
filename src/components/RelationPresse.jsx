/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Row, Container, Spinner } from "reactstrap";
import Axios from "axios";
import BaseCardRelationPresse from "./builders/BaseCardRelationPresse";
const RelationPresse = () => {
  const [relationPressDatas, setRelationPressDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    getPress();
  }, []);

  if (isLoading) {
    return <Spinner color="info" />;
  }

  return (
    <Container>
      <Row>
        <h1>Relation Presse</h1>
      </Row>
      <Row>
        {relationPressDatas.map((it) => (
          <BaseCardRelationPresse
            uuid={it.uuid}
            titre={it.title}
            descriptif={it.description}
            picture={it.picture}
          />
        ))}
      </Row>
    </Container>
  );
};

export default RelationPresse;
