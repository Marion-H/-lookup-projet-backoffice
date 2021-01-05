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
import CKEditor from "@ckeditor/ckeditor5-react";
import ReactHtmlParser from "react-html-parser";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { logout } from "../../store/actionCreators";
import { imgurToken } from "../../imgurToken";
import apiUrl from "../../apiUrl";

toast.configure();

function ModalProduct({ description, picture, name, price, uuid, getProduct }) {
  const notifySuccess = () => {
    toast.success("Produit bien modifié !", {
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
    description,
    picture,
    name,
    price,
    uuid,
  });
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);

  const handlePicture = (e) => {
    setProduct({ ...product, picture: e.target.files[0] });
  };

  const putProduct = async (e) => {
    e.preventDefault();
    try {
      const resImgur = await Axios.post(
        "https://api.imgur.com/3/image",
        product.picture,
        {
          headers: { Authorization: `Client-ID ${imgurToken}` },
        }
      );
      await Axios.put(
        `${apiUrl}/products/${uuid}`,
        {
          description: product.description,
          picture: resImgur.data.data.link,
          name: product.name,
          price: product.price,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getProduct();
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
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Produits</ModalHeader>
        <Form onSubmit={putProduct}>
          <ModalBody>
            <Row>
              <Col lg="12">
                <h6>Nom</h6>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{ReactHtmlParser(name)}</Col>
              <Col lg="6">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();

                    setProduct({
                      ...product,

                      name: data,
                    });
                  }}
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

                    setProduct({
                      ...product,

                      description: data,
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
                  type="file"
                  files={product.picture}
                  name="picture"
                  onChange={handlePicture}
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label>
                  <h6>Prix</h6>
                </label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{price} €</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="number"
                  step="0.1"
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

export default ModalProduct;
