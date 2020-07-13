import React, { useState, useEffect } from "react";
import { Row, Container, Col } from "reactstrap";
import Axios from "axios";
import BaseCardConference from "./builders/BaseCardConference";
import AddConferences from "./builders/AddConferences";
const Conferences = () => {
  const [conferenceDatas, setConferenceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getConference = async () => {
    try {
      const res = await Axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/conferences"
      );
      setConferenceDatas(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getConference();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Conferences</h1>
      </Row>
      <Row>
        {conferenceDatas.map((it, k) => (
          <Col md="4" sm="6" xs="12" className="pb-4">
            <BaseCardConference
              key={k}
              subject={it.subject}
              date={it.date}
              titre={it.title}
              picture={it.picture}
              uuid={it.uuid}
              getConference={getConference}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <AddConferences getConference={getConference} />
      </Row>
    </Container>
  );
};

export default Conferences;
