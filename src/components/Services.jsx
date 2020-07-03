import React from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container } from "reactstrap";
const Services = () => {
  const servicesInfo = [
    {
      id: 1,
      titre: "LookUp",
      descriptif:
        "this is a fancy product with some nice text talking about it. If we add some more text it should wrap",
      image:
        "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
    },
  ];

  // const ItemLoop = () => {
  //     for (let i = 0; i < Object.keys(servicesInfo[0]).length; i++) {
  //         return (
  //             <BaseCardText
  //                 item={Object.keys(servicesInfo[0])[i]}
  //                 value={servicesInfo[0][i]}
  //                 dataArray={servicesInfo}
  //             />
  //         );
  //     }
  // };

  return (
    <Container>
      <Row>
        <h1>Services</h1>
      </Row>
      <Row>
        <Table>
          <BaseCardText
            item={Object.keys(servicesInfo[0])[0]}
            value={servicesInfo[0].id}
            dataArray={servicesInfo}
          />
          <BaseCardText
            item={Object.keys(servicesInfo[0])[1]}
            value={servicesInfo[0].titre}
            dataArray={servicesInfo}
          />
          <BaseCardText
            item={Object.keys(servicesInfo[0])[2]}
            value={servicesInfo[0].descriptif}
            dataArray={servicesInfo}
          />
          <BaseCardText
            item={Object.keys(servicesInfo[0])[3]}
            value={servicesInfo[0].image}
            dataArray={servicesInfo}
          />
        </Table>
      </Row>
    </Container>
  );
};

export default Services;
