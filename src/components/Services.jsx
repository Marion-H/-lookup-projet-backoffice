import React, { useEffect, useState } from "react";
import BaseCardImage from "./builders/BaseCardImage";
import { Row, Container, Spinner } from "reactstrap";
import Axios from "axios";
const Services = () => {
  const [serviceDatas, setServiceDatas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getService = async () => {
    try {
      const res = await Axios.get(
        "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/services"
      );
      setServiceDatas(res.data);
      console.log("coucou toi", serviceDatas);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getService();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // let Items = [];

  // const ItemLoop = (table) => {
  //   for (let i = 0; i < Object.keys(table[0]).length; i++) {
  //     let ItemValue = {
  //       item: Object.keys(table[0])[i],
  //       value: Object.values(table[0])[i],
  //     };
  //     Items.push(ItemValue);
  //   }
  // };
  // ItemLoop(servicesInfo);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Services</h1>
      </Row>
      <Row>
        {serviceDatas.map((it) => (
          <BaseCardImage
            titre={it.title}
            description={it.description}
            logo={it.logo}
          />
        ))}
        {/* <Table>
          {Items.map((item, key) => (
            <BaseCardText
              key={key}
              item={item.item}
              value={item.value}
              dataArray={servicesInfo}
            />
          ))}
        </Table> */}
      </Row>
    </Container>
  );
};
export default Services;
