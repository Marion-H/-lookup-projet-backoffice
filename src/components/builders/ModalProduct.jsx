import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
  Row,
  Col,
} from "reactstrap";
import Axios from "axios";

toast.configure();

function ModalProduct({ description, picture, name, price, uuid, onClick }) {
  const notifySuccess = () => {
    toast.success("Carousel bien modifié !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const notifyError = () => {
    toast.error("Erreur Notification !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [modal, setModal] = useState(false);

  const [product, setProduct] = useState({
    name,
    description,
    picture,
    price,
  });
  const { handleSubmit, register } = useForm();

  const toggle = () => setModal(!modal);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwODAzMjkyLWE4YTgtNGVlYy04OTViLTliODlmYzk1OWY0ZiIsImVtYWlsIjoiYW50aG9uaW42NEBsb29rdXAuZnIiLCJpYXQiOjE1OTQxMzQ3NTAsImV4cCI6MTU5NDEzODM1MH0.fukWDHGJ0x3wC9m8xb-tNaxSf_BWdgfIvgL-_wflNm8";

  const putProduct = async () => {
    try {
      await Axios.put(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products/${uuid}`,
        product,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess();
    } catch (err) {
      notifyError();
      console.log(err);
    }
  };

  return (
    <Container>
      <Button color="danger" onClick={toggle}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Produits</ModalHeader>
        <Form onSubmit={handleSubmit(putProduct)}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Nom </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{name}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="name"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      name: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Description</label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{description}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  name="description"
                  type="text"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Image </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{picture}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="picture"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Prix</label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{price} €</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="price"
                  onChange={(e) =>
                    setProduct({
                      ...product,
                      price: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={onClick}>
              Valider
            </Button>{" "}
            <Button color="secondary" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </Container>
  );
}

export default ModalProduct;
