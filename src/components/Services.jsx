import React, { useEffect, useState } from "react";
import { Row, Container, Spinner, Col } from "reactstrap";
import Axios from "axios";

import BaseCardServices from "./builders/BaseCardServices";
import AddService from "./builders/AddService";

import apiUrl from "../apiUrl";

const Services = () => {
  const [serviceDatas, setServiceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getService = async () => {
    try {
      const res = await Axios.get(`${apiUrl}/services`);
      setServiceDatas(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Services</h1>
      </Row>
      <Row>
        {serviceDatas.map((it) => (
          <Col md="4" sm="6" xs="12" className="pb-4">
            <BaseCardServices
              uuid={it.uuid}
              titre={it.title}
              descriptif={it.description}
              logo={it.logo}
              getService={getService}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <AddService getService={getService} />
      </Row>
    </Container>
  );
};

export default Services;
