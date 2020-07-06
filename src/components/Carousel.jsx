import React, { useState, useEffect } from "react";
import BaseCardText from "./builders/BaseCardText";
import { Container, Row, Table, Spinner } from "reactstrap";
import axios from "axios";

const Carousel = () => {
  const [carouselDatas, setCarouselDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getCarousel = async () => {
      try {
        const res = await axios.get(
          "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/carousels/"
        );
        setCarouselDatas(res.data[0]);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getCarousel();
  }, []);

  let Items = [];
  const ItemLoop = (table) => {
    for (let i = 0; i < Object.keys(table).length; i++) {
      let ItemValue = {
        item: Object.keys(table[0])[i],
        value: Object.values(table[0])[i],
      };
      console.log(Object.keys(table).length);
      console.log(table);
      console.log(Object.keys(table));
      Items.push(ItemValue);
    }
  };
  ItemLoop(carouselDatas);
  // console.log("coucou", Items);

  // const carouselInfo = [
  //   {
  //     id: 1,
  //     titre: "Some title",
  //     sujet: "an interesting subject",
  //     date: "26/06/2020",
  //     image:
  //       "https://mlodp7767kae.i.optimole.com/ZvkZDw-upSZOLoJ/w:840/h:630/q:auto/https://kickstore.fr/wp-content/uploads/2019/06/lookup2.png",
  //   },
  // ];

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Carousel</h1>
      </Row>
      <Row>
        <Table>
          {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={carouselDatas}
              onClick={() => alert("coucou")}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Carousel;
