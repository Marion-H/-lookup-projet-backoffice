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
  CardGroup,
} from "reactstrap";
import ModalProductInfo from "./ModalProductInfo";
import ModalProductInfo2 from "./ModalProductInfo2";
import ModalProductInfo3 from "./ModalProductInfo3";

import { useParams } from "react-router-dom";
import Axios from "axios";
import ReactHtmlParser from "react-html-parser";

import AddProductInfo from "./AddProductInfo";
import apiUrl from "../../apiUrl";

const BaseCardProductInfo = () => {
  const [productInfo, setProductInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { uuid } = useParams();

  const getProductInfo = async () => {
    try {
      const res = await Axios.get(`${apiUrl}/products/${uuid}/products_info`);
      setProductInfo(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProductInfo();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }
  return (
    <Container>
      {!productInfo[0] ? (
        <Row>
          <AddProductInfo uuid={uuid} getProductInfo={getProductInfo} />
        </Row>
      ) : (
        productInfo.map((info) => (
          <>
            <Row>
              <CardGroup>
                <Card>
                  <CardHeader>{info.title}</CardHeader>
                  <CardImg
                    top
                    width="100%"
                    src={info.picture}
                    alt={info.title}
                  />
                  <CardBody>
                    <CardText>
                      Texte 1 : {ReactHtmlParser(info.description)}
                    </CardText>
                  </CardBody>
                  <ModalProductInfo
                    key={info.uuid}
                    uuid={info.uuid}
                    title={info.title}
                    description={info.description}
                    picture={info.picture}
                    getProductInfo={getProductInfo}
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={info.picture2}
                    alt={info.title}
                  />
                  <CardBody>
                    <CardText>
                      Texte 2 : {ReactHtmlParser(info.description2)}
                    </CardText>
                  </CardBody>
                  <ModalProductInfo2
                    key={info.uuid}
                    uuid={info.uuid}
                    description2={info.description2}
                    picture2={info.picture2}
                    getProductInfo={getProductInfo}
                  />
                </Card>
                <Card>
                  <CardImg
                    top
                    width="100%"
                    src={info.picture3}
                    alt={info.title}
                  />
                  <CardBody>
                    <CardText>
                      Texte 3 :{ReactHtmlParser(info.description3)}
                    </CardText>
                  </CardBody>
                  <ModalProductInfo3
                    key={info.uuid}
                    uuid={info.uuid}
                    description3={info.description3}
                    picture3={info.picture3}
                    getProductInfo={getProductInfo}
                  />
                </Card>
              </CardGroup>
            </Row>
          </>
        ))
      )}
    </Container>
  );
};
export default BaseCardProductInfo;
