import React, { useState, useEffect } from "react";
import { Row, Container, Spinner } from "reactstrap";
import axios from "axios";
import BaseCardPartenaires from "./builders/BaseCardPartenaires";
import AddPartner from "./builders/AddPartner";
const Partenaires = () => {
  const [partenaireData, setPartenaireData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPartenaire();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPartenaire = async () => {
    try {
      const res = await axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/partenaires"
      );
      setPartenaireData(res.data);
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
        {partenaireData.map((it) => (
          <BaseCardPartenaires
            key={it.uuid}
            uuid={it.uuid}
            titre={it.title}
            descriptif={it.description}
            logo={it.logo}
            getPartenaire={getPartenaire}
          />
        ))}
      </Row>
      <Row>
        <AddPartner getPartenaire={getPartenaire} />
      </Row>
    </Container>
  );
};

export default Partenaires;
