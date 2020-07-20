import React, { useState } from "react";
import { toast } from "react-toastify";
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
  Spinner,
} from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import { logout } from "../../store/actionCreators";

toast.configure();
const AddConferences = ({ getConference }) => {
  const notifySuccess = () => {
    toast.success("Conference bien ajouté !", {
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

  const [conferences, setConferences] = useState({});
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);
  const postConferences = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/conferences/`,
        conferences,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getConference();
      notifySuccess();
    } catch (err) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };

  const isAuthenticated = () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      try {
        const { exp } = jwt.decode(token);
        if (exp < (new Date().getTime() + 1) / 1000) {
          return dispatch(logout());
        }
        return toggle();
      } catch (err) {
        notifyError();
        return dispatch(logout());
      }
    }
    return dispatch(logout());
  };

  return (
    <Container>
      <Button color="success" onClick={isAuthenticated}>
        Ajouter
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Conferences</ModalHeader>
        <Form onSubmit={postConferences}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Titre </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setConferences({
                      ...conferences,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Description</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <textarea
                  ref={register({ required: true })}
                  name="subject"
                  type="text"
                  onChange={(e) =>
                    setConferences({
                      ...conferences,
                      subject: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Date</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="date"
                  name="date"
                  onChange={(e) =>
                    setConferences({
                      ...conferences,
                      date: e.target.value,
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
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setConferences({
                      ...conferences,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={toggle}>
              {loading ? <Spinner size="sm" /> : "Valider"}
            </Button>{" "}
            <Button color="danger" onClick={toggle}>
              Annuler
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </Container>
  );
};

export default AddConferences;
