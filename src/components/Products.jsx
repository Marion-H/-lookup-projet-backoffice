import React, { useState, useEffect } from "react";
import { Row, Table, Container, Spinner } from "reactstrap";
import axios from "axios";
import BaseCardProduct from "./builders/BaseCardProduct";
const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get(
          "https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/partenaires"
        );
        setProductData(res.data);
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  return (
    <Container>
      <Row>
        <h1>Products</h1>
      </Row>
      <Row>
        <Table>
          {productData.map((it, key) => (
            <BaseCardProduct
              key={key}
              name={it.name}
              prix={it.price}
              descriptif={it.description}
            />
          ))}
        </Table>
      </Row>
    </Container>
  );
};

export default Products;
