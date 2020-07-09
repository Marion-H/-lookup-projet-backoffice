import React, { useState, useEffect } from "react";
import BaseCardLookup from "./builders/BaseCardLookUp";
import { Container, Row, Spinner } from "reactstrap";
import axios from "axios";

const Home = () => {
  const [lookupDatas, setLookupDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const uuid = "10803292-a8a8-4eec-895b-9b89fc959f4f";

  useEffect(() => {
    const getLookupDatas = async () => {
      try {
        const res = await axios.get(
          `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/admin/${uuid}`
        );
        setLookupDatas(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getLookupDatas();
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Carousel</h1>
      </Row>
      <Row>
        {/* {lookupDatas.map((it) => (
          <BaseCardLookup
            key={it.uuid}
            uuid={it.uuid}
            companyName={it.companyName}
            streetName={it.streetName}
            streetNumber={it.streetNumber}
            postalCode={it.postalCode}
            city={it.city}
            email={it.email}
            phone={it.phone}
            siret={it.siret}
          />
        ))} */}
      </Row>
    </Container>
  );
};

export default Home;
