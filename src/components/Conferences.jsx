import React, { useState, useEffect } from "react";
import BaseCardText from "./builders/BaseCardText";
import { Row, Table, Container } from "reactstrap";
import Axios from "axios";
const Conferences = () => {
  const conferencesInfo = [
    {
      id: 1,
      titre: "Some title",
      sujet: "an interesting subject",
      date: "26/06/2020",
      image:
        "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
    },
  ];


  const [conferenceDatas, setConferenceDatas] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
   getConference()
  }, [])

  const getConference= async () =>{
    try{
      const res = Axios.get("https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/conferences")
      setConferenceDatas(res)
      console.log(conferenceDatas)
    }catch(err){
      console.log(err)
    }finally{
      setIsLoading(false)
    }
  }

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
  ItemLoop(conferencesInfo);

  if (isLoading){
    return <p>Loading</p>;
  }

  return (
    <Container>
      <Row>
        <h1>Conferences</h1>
      </Row>
      <Row>
        <Table>
          {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={conferencesInfo}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Conferences;
