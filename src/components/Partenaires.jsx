import React, { useState, useEffect } from "react";
import { Row, Container, Spinner, Col } from "reactstrap";
import axios from "axios";
import BaseCardPartenaires from "./builders/BaseCardPartenaires";
import AddPartner from "./builders/AddPartner";
import apiUrl from "../apiUrl";

const Partenaires = () => {
  const [partenaireData, setPartenaireData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    getPartenaire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPartenaire = async () => {
    try {
      const res = await axios.get(`${apiUrl}/partenaires`);
      setPartenaireData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Partenaires</h1>
      </Row>
      <Row>
        {partenaireData.map((it) => (
          <Col md="4" sm="6" xs="12" className="pb-4">
            <BaseCardPartenaires
              key={it.uuid}
              uuid={it.uuid}
              link={it.link}
              descriptif={it.description}
              logo={it.logo}
              getPartenaire={getPartenaire}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <AddPartner getPartenaire={getPartenaire} />
      </Row>
    </Container>
  );
};

export default Partenaires;
