import React, { useState, useEffect } from "react";
import { Row, Table, Container } from "reactstrap";
import Axios from "axios";
import BaseCardConference from "./builders/BaseCardConference";
const Conferences = () => {
  const [conferenceDatas, setConferenceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
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
    getConference();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row>
        <h1>Conferences</h1>
      </Row>
      <Row>
        <Table>
          {conferenceDatas.map((it, k) => (
            <BaseCardConference
              key={k}
              subject={it.subject}
              date={it.date}
              titre={it.title}
              picture={it.picture}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Conferences;
