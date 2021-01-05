import React, { useState, useEffect } from "react";
import axios from "axios";
import { Spinner, Container, Row } from "reactstrap";

import apiUrl from "../apiUrl";

import BaseCardClients from "./builders/BaseCardClients";

const Repo = () => {
  const [clients, setClients] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  useEffect(() => {
    const getClients = async () => {
      try {
        const res = await axios.get(`${apiUrl}/clients`);
        setClients(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    getClients();
  }, []);

  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{error}</div>;
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
