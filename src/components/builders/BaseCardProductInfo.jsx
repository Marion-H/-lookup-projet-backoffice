import React, { useState, useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Container,
  Row,
  CardHeader,
  Spinner,
} from "reactstrap";
import ModalProduct from "./ModalProduct";
import { useParams } from "react-router-dom";
import Axios from "axios";

const BaseCardProductInfo = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { uuid } = useParams();

  useEffect(() => {
    const getProductInfo = async () => {
      try {
        const res = await Axios.get(
          `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products/${uuid}/products_info`
        );
        setProductInfo(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getProductInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productInfo]);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  return (
    <Container>
      {productInfo.map((info) => (
        <>
          <Row>
            <Card>
              <CardHeader>{info.title}</CardHeader>
              <CardImg top width="100%" src={info.picture} alt={info.title} />
              <CardBody>
                <CardText>descriptif : {info.description}</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={info.picture2} alt={info.title} />
              <CardBody>
                <CardText>descriptif : {info.description2}</CardText>
              </CardBody>
            </Card>
            <Card>
              <CardImg top width="100%" src={info.picture3} alt={info.title} />
              <CardBody>
                <CardText>descriptif : {info.description3}</CardText>
              </CardBody>
            </Card>
            <ModalProduct
              key={info.uuid}
              uuid={info.uuid}
              title={info.title}
              description={info.description}
              description2={info.description2}
              description3={info.description3}
              picture={info.picture}
              picture2={info.picture2}
              picture3={info.picture3}
            />
          </Row>
        </>
      ))}
    </Container>
  );
};
export default BaseCardProductInfo;
