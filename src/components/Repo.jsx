import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Container, Row } from "reactstrap";
import BaseCardClients from "./builders/BaseCardClients";
const Repo = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(
          "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/clients"
        );
        setClients(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getClients();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Répertoire</h1>
      </Row>
      <Row>
        {clients.map((it) => (
          <BaseCardClients
            companyName={it.companyName}
            streetNumber={it.streetNumber}
            streetName={it.streetName}
            city={it.city}
            postalCode={it.postalCode}
            email={it.email}
            phone={it.phone}
            siret={it.siret}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Repo;
