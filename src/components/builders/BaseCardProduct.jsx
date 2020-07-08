import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import { Link } from "react-router-dom";

const BaseCardProduct = ({ description, picture, name, price, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={description} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>descriptif: {description}</CardText>
          <CardSubtitle>prix: {price} €</CardSubtitle>

          <Link to={`/${uuid}/products_info`}>
            <Button>Informations</Button>
          </Link>
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardProduct;
