import React, { useState, useEffect} from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container, Spinner } from "reactstrap";
import axios from 'axios';
const Partenaires = () => {
  const [partenaireData, setPartenaireData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPartenaire()
  }, [])

  const getPartenaire = async () => {
    try{
      const res = axios.get("https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/partenaires");
      setPartenaireData(res)
        console.log(partenaireData)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }
  const partenairesInfo = [
    {
      id: 1,
      titre: "pyrenees atlantiques",
      descriptif: "an important partner",
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
  ItemLoop(partenairesInfo);

  if(isLoading){
    return <Spinner color="primary"/>;
  }

  return (
    <Container>
      <Row>
        <h1>Partenaires</h1>
      </Row>
      <Row>
        <Table>
          {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={partenairesInfo}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Partenaires;
