import React, { useEffect, useState } from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container } from "reactstrap";
import Axios from "axios";
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

  const [relationPressDatas, setRelationPressDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPress();
  }, []);

  const getPress = async () => {
    try {
      const res = Axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press"
      );
      setRelationPressDatas(res);
      console.log(relationPressDatas);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

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

  if (isLoading) {
    return <p>Loading</p>;
  }

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
