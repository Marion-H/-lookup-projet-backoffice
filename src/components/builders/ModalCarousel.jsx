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
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import { logout } from "../../store/actionCreators";

const ModalCarousel = ({
  title,
  description,
  link,
  picture,
  uuid,
  getCarousel,
}) => {
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
  const [carousel, setCarousel] = useState({
    title,
    description,
    link,
    picture,
  });

  const { register } = useForm();
  const history = useHistory();
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const putCarousel = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/carousels/${uuid}`,
        carousel,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getCarousel();
      notifySuccess();
    } catch (err) {
      history.push("/login");
      notifyError();
      console.log(err);
    }
  };

  const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const { exp } = jwt.decode(token);
        if (exp < (new Date().getTime() + 1) / 1000) {
          console.log("nope");
          return false;
        }
        console.log("true");

        return true;
      } catch (err) {
        console.log("false");
        notifyError();
        return false;
      }
    }
    return false;
  };

  return (
    <Container>
      <Button
        color="warning"
        onClick={isAuthenticated() ? toggle : dispatch(logout())}
      >
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Carousel</ModalHeader>
        <Form onSubmit={putCarousel}>
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
                    setCarousel({
                      ...carousel,
                      title: e.target.value,
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
                    setCarousel({
                      ...carousel,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Lien </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{link}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setCarousel({
                      ...carousel,
                      link: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Image</label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{picture}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setCarousel({
                      ...carousel,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={toggle}>
              Valider
            </Button>{" "}
            <Button color="danger" onClick={toggle}>
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

export default ModalCarousel;
