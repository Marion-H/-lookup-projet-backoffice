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
const ModalServices = ({ onClick, title, description, logo, uuid }) => {
  const notifySuccess = () => {
    toast.success("Services bien modifié !", {
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

  const [services, setServices] = useState({
    title,
    description,
    logo,
  });
  const { handleSubmit, register } = useForm();
  // const onSubmit = (values) => console.log(values);

  const toggle = () => setModal(!modal);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwODAzMjkyLWE4YTgtNGVlYy04OTViLTliODlmYzk1OWY0ZiIsImVtYWlsIjoiYW50aG9uaW42NEBsb29rdXAuZnIiLCJpYXQiOjE1OTQxMzQwNDQsImV4cCI6MTU5NDEzNzY0NH0.a8gVKN6mPjKruX3xPJGn7s-ZncagUtkql8qabJkkwWs";

  const putServices = async () => {
    try {
      await Axios.put(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/services/${uuid}`,
        services,
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
        <ModalHeader toggle={toggle}>Services</ModalHeader>
        <Form onSubmit={handleSubmit(putServices)}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Titre </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{title}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setServices({
                      ...services,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Description:</label>
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
                    setServices({
                      ...services,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Logo: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{logo}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setServices({
                      ...services,
                      link: e.target.value,
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
};

export default ModalServices;
