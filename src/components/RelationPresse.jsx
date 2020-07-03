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
  let Items = [];

  const ItemLoop = (table) => {
    for (let i = 0; i < Object.keys(table[0]).length; i++) {
      let ItemValue = {
        item: Object.keys(table[0])[i],
        value: Object.values(table[0])[i],
      };
      Items.push(ItemValue);
    }
  };
  ItemLoop(relationPresseInfo);

  return (
    <Container>
      <Row>
        <h1>Relation Presse</h1>
      </Row>
      <Row>
        <Table>
          {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={relationPresseInfo}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};
export default RelationPresse;
