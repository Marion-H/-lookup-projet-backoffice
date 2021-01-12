import React, { useState, useEffect } from "react";
import { Row, Container, Spinner, Col } from "reactstrap";
import axios from "axios";
import BaseCardProduct from "./builders/BaseCardProduct";
import AddProduct from "./builders/AddProduct";

import apiUrl from "../apiUrl";

const Products = () => {
  const [productData, setProductData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const getProduct = async () => {
    try {
      const res = await axios.get(`${apiUrl}/products`);
      setProductData(res.data);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return <Spinner color="primary" />;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Row className="d-flex justify-content-center">
        <h1>Produits</h1>
      </Row>
      <Row>
        {productData.map((it) => (
          <Col md="4" sm="6" xs="12" className="pb-4">
            <BaseCardProduct
              key={it.uuid}
              uuid={it.uuid}
              name={it.name}
              price={it.price}
              description={it.description}
              picture={it.picture}
              getProduct={getProduct}
            />
          </Col>
        ))}
      </Row>
      <Row>
        <AddProduct getProduct={getProduct} />
      </Row>
    </Container>
  );
};

export default Products;
