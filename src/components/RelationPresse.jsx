import React from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container } from "reactstrap";
const RelationPresse = () => {
  const relationPresseInfo = [
    {
      id: 1,
      titre: "pyrenees atlantiques",
      descriptif: "an important media article etc",
      image:
        "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
    },
  ];

  // const ItemLoop = () => {
  //     for (let i = 0; i < Object.keys(relationPresseInfo[0]).length; i++) {
  //         return (
  //             <BaseCardText
  //                 item={Object.keys(relationPresseInfo[0])[i]}
  //                 value={relationPresseInfo[0][i]}
  //                 dataArray={relationPresseInfo}
  //             />
  //         );
  //     }
  // };

  return (
    <Container>
      <Row>
        <h1>Relation Presse</h1>
      </Row>
      <Row>
        <Table>
          <BaseCardText
            item={Object.keys(relationPresseInfo[0])[0]}
            value={relationPresseInfo[0].id}
            dataArray={relationPresseInfo}
          />
          <BaseCardText
            item={Object.keys(relationPresseInfo[0])[1]}
            value={relationPresseInfo[0].titre}
            dataArray={relationPresseInfo}
          />
          <BaseCardText
            item={Object.keys(relationPresseInfo[0])[2]}
            value={relationPresseInfo[0].descriptif}
            dataArray={relationPresseInfo}
          />
          <BaseCardText
            item={Object.keys(relationPresseInfo[0])[3]}
            value={relationPresseInfo[0].image}
            dataArray={relationPresseInfo}
          />
        </Table>
      </Row>
    </Container>
  );
};

export default RelationPresse;
