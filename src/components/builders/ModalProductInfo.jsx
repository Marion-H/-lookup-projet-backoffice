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

import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";

import { logout } from "../../store/actionCreators";

toast.configure();

function ModalProductInfo({
  uuid,
  title,
  description,
  description2,
  description3,
  picture,
  picture2,
  picture3,
  getProductInfo,
}) {
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

  const [productInfo, setProductInfo] = useState({
    title,
    description,
    description2,
    description3,
    picture,
    picture2,
    picture3,
  });
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);

  const putProductInfo = async (e) => {
    e.preventDefault();
    try {
      await Axios.put(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products_info/${uuid}`,
        productInfo,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getProductInfo();
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
    <Container>
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Produits informations</ModalHeader>
        <Form onSubmit={putProductInfo}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <h6>Titre</h6>
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
                    setProductInfo({
                      ...productInfo,
                      title: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>
                  <h6>Description</h6>{" "}
                </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{ReactHtmlParser(description)}</Col>
              <Col lg="6">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setProductInfo({
                      ...productInfo,
                      description: data,
                    });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">{description2}</Col>
              <Col lg="6">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setProductInfo({
                      ...productInfo,
                      description2: data,
                    });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">{description3}</Col>
              <Col lg="6">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setProductInfo({
                      ...productInfo,
                      description3: data,
                    });
                  }}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>
                  <h6>Image</h6>
                </label>
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
                    setProductInfo({
                      ...productInfo,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">{picture2}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="picture2"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      picture2: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="6">{picture3}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="picture3"
                  onChange={(e) =>
                    setProductInfo({
                      ...productInfo,
                      picture3: e.target.value,
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
}

export default ModalProductInfo;
