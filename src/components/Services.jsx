import React, { useEffect, useState } from "react";
import { Row, Container, Spinner } from "reactstrap";
import Axios from "axios";
import BaseCardServices from "./builders/BaseCardServices";
import AddService from "./builders/AddService";
const Services = () => {
  const [serviceDatas, setServiceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getService = async () => {
      try {
        const res = await Axios.get(
          "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/services"
        );
        setServiceDatas(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [serviceDatas]);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Services</h1>
      </Row>
      <Row>
        {serviceDatas.map((it) => (
          <BaseCardServices
            uuid={it.uuid}
            titre={it.title}
            descriptif={it.description}
            logo={it.logo}
          />
        ))}
      </Row>{" "}
      <Row>
        <AddService />
      </Row>
    </Container>
  );
};
export default Services;
