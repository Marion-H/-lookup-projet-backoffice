import React, { useEffect, useState } from "react";
import { Row, Container, Spinner } from "reactstrap";
import Axios from "axios";
import BaseCardServices from "./builders/BaseCardServices";
import AddService from "./builders/AddService";
const Services = () => {
  const [serviceDatas, setServiceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  useEffect(() => {
    getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            key={it.uuid}
            uuid={it.uuid}
            titre={it.title}
            descriptif={it.description}
            logo={it.logo}
            getService={getService}
          />
        ))}
      </Row>{" "}
      <Row>
        <AddService getService={getService} />
      </Row>
    </Container>
  );
};
export default Services;
