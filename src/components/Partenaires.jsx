import React, { useState, useEffect } from "react";
import { Row, Table, Container, Spinner } from "reactstrap";
import axios from "axios";
import BaseCardPartenaires from "./builders/BaseCardPartenaires";
const Partenaires = () => {
  const [partenaireData, setPartenaireData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPartenaire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPartenaire = async () => {
    try {
      const res = axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/partenaires"
      );
      setPartenaireData(res);
      console.log(partenaireData);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Partenaires</h1>
      </Row>
      <Row>
        <Table>
          {partenaireData.map((it, key) => (
            <BaseCardPartenaires
              key={key}
              titre={it.title}
              descriptif={it.description}
              logo={it.logo}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Partenaires;
