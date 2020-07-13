import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { Link } from "react-router-dom";
import DeleteProduct from "./DeleteProduct";
import ModalProduct from "./ModalProduct";

const BaseCardProduct = ({
  description,
  picture,
  name,
  price,
  uuid,
  getProduct,
}) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={description} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>descriptif: {description}</CardText>
          <CardSubtitle>prix: {price} €</CardSubtitle>
          <Row className="d-flex flex-column align-items-center">
            <Col xs="12" className="pb-2 ml-4">
              <Link to={`/${uuid}/products_info`}>
                <Button color="info">Informations</Button>
              </Link>
            </Col>
            <Col xs="12" className="pb-2 d-flex justify-content-center">
              <ModalProduct getProduct={getProduct} uuid={uuid} />
            </Col>
            <Col xs="12" className="pb-2 d-flex justify-content-center">
              <DeleteProduct uuid={uuid} getProduct={getProduct} />
            </Col>
          </Row>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardProduct;
