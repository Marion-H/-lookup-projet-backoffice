import React from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container } from "reactstrap";
const Partenaires = () => {
  const partenairesInfo = [
    {
      id: 1,
      titre: "pyrenees atlantiques",
      descriptif: "an important partner",
      image:
        "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
    },
  ];

  // const ItemLoop = () => {
  //     for (let i = 0; i < Object.keys(partenairesInfo[0]).length; i++) {
  //         return (
  //             <BaseCardText
  //                 item={Object.keys(partenairesInfo[0])[i]}
  //                 value={partenairesInfo[0][i]}
  //                 dataArray={partenairesInfo}
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
            item={Object.keys(partenairesInfo[0])[0]}
            value={partenairesInfo[0].id}
            dataArray={partenairesInfo}
          />
          <BaseCardText
            item={Object.keys(partenairesInfo[0])[1]}
            value={partenairesInfo[0].titre}
            dataArray={partenairesInfo}
          />
          <BaseCardText
            item={Object.keys(partenairesInfo[0])[2]}
            value={partenairesInfo[0].descriptif}
            dataArray={partenairesInfo}
          />
          <BaseCardText
            item={Object.keys(partenairesInfo[0])[3]}
            value={partenairesInfo[0].image}
            dataArray={partenairesInfo}
          />
        </Table>
      </Row>
    </Container>
  );
};

export default Partenaires;
