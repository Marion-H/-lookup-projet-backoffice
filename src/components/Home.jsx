import React, { useState, useEffect } from "react";
import BaseCardLookup from "./builders/BaseCardLookUp";
import { Container, Row, Spinner, Col } from "reactstrap";
import axios from "axios";
import apiUrl from "../apiUrl";

const Home = () => {
  const [lookupDatas, setLookupDatas] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const uuid = sessionStorage.getItem("uuid");

  const getLookupDatas = async () => {
    try {
      const res = await axios.get(`${apiUrl}/admin/${uuid}`);
      setLookupDatas(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getLookupDatas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Lookup Infos</h1>
      </Row>
      <Row>
        <Col md="4" sm="6" xs="12" className="pb-4">
          <BaseCardLookup
            key={lookupDatas.uuid}
            uuid={lookupDatas.uuid}
            companyName={lookupDatas.companyName}
            streetName={lookupDatas.streetName}
            streetNumber={lookupDatas.streetNumber}
            postalCode={lookupDatas.postalCode}
            city={lookupDatas.city}
            email={lookupDatas.email}
            phone={lookupDatas.phone}
            siret={lookupDatas.siret}
            password={lookupDatas.password}
            getLookupDatas={getLookupDatas}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
