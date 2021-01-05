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
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";

import { logout } from "../../store/actionCreators";
import apiUrl from "../../apiUrl";

toast.configure();
const ModalServices = ({
  companyName,
  streetName,
  streetNumber,
  postalCode,
  city,
  email,
  password,
  phone,
  siret,
  getLookupDatas,
}) => {
  const notifySuccess = () => {
    toast.success("Vos information sont modifié !", {
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

  const [lookupDatas, setLookupDatas] = useState({
    companyName,
    streetName,
    streetNumber,
    postalCode,
    city,
    email,
    password,
    phone,
    siret,
  });
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);
  const putLookup = async (e) => {
    const uuid = sessionStorage.getItem("uuid");
    e.preventDefault();
    try {
      await Axios.put(`${apiUrl}/admin/login/${uuid}`, lookupDatas, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getLookupDatas();
      notifySuccess();
    } catch (err) {
      notifyError();
      console.log(err);
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
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Lookup infos</ModalHeader>
        <Form onSubmit={putLookup}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <label>Entreprise </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{companyName}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="title"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      companyName: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Rue:</label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{streetName}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  name="description"
                  type="text"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      streetName: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Numero de rue: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{streetNumber}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      streetNumber: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Code postale: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{postalCode}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      postalCode: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Ville: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{city}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      city: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Telephone: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{phone}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      phone: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Siret: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{siret}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      siret: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Email: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{email}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      email: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>Password: </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{password}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="password"
                  name="lien"
                  onChange={(e) =>
                    setLookupDatas({
                      ...lookupDatas,
                      password: e.target.value,
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

export default ModalServices;
