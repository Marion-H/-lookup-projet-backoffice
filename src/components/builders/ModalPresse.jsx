import React, { useState } from "react";
import { toast } from "react-toastify";

import { useForm } from "react-hook-form";
import {
  Form,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
  Spinner,
} from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import { logout } from "../../store/actionCreators";

const ModalPresse = ({ title, description, picture, uuid, getPress }) => {
  const notifySuccess = () => {
    toast.success("Relation Presse bien modifié !", {
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

  const [presses, setPresses] = useState({
    title,
    description,
    picture,
  });
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);
  const putPresse = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press/${uuid}`,
        presses,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getPress();
      notifySuccess();
    } catch (err) {
      notifyError();
      dispatch(logout());
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
    <Col>
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Relation presse</ModalHeader>
        <Form onSubmit={putPresse}>
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
                    setPresses({
                      ...presses,
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
                    setPresses({
                      ...presses,
                      description: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Image: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{picture}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setPresses({
                      ...presses,
                      link: e.target.value,
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
    </Col>
  );
};

export default ModalPresse;
