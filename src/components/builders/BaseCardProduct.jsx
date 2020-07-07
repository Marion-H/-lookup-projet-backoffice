import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import ModalProduct from "./ModalProduct";

const BaseCardProduct = ({ description, picture, name, price, uuid }) => {
  return (
    <div>
      <Card>
        <CardImg top width="100%" src={picture} alt={description} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardText>descriptif: {description}</CardText>
          <CardSubtitle>prix: {price} €</CardSubtitle>

          <ModalProduct
            uuid={uuid}
            name={name}
            description={description}
            price={price}
            picture={picture}
          />
        </CardBody>
      </Card>
    </div>
  );
};

export default BaseCardProduct;
