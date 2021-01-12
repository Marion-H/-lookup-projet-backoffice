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
  Row,
  Col,
  Spinner,
} from "reactstrap";
import Axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { imgurToken } from "../../imgurToken";

import { logout } from "../../store/actionCreators";
import apiUrl from "../../apiUrl";

const ModalServices = ({ title, description, logo, uuid, getService }) => {
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
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const handleLogo = (e) => {
    return setServices({ ...services, logo: e.target.files[0] });
  };

  const token = useSelector((state) => state.admin.token);
  const putServices = async (e) => {
    e.preventDefault();
    try {
      const resImgur = await Axios.post(
        "https://api.imgur.com/3/image",
        services.logo,
        {
          headers: { Authorization: `Client-ID ${imgurToken}` },
        }
      );
      await Axios.put(
        `${apiUrl}/services/${uuid}`,
        {
          title: services.title,
          description: services.description,
          logo: resImgur.data.data.link,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getService();
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
    <Col>
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Services</ModalHeader>
        <Form onSubmit={putServices}>
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
              <Col lg="6">{ReactHtmlParser(description)}</Col>
              <Col lg="6">
                <CKEditor
                  editor={ClassicEditor}
                  onChange={(event, editor) => {
                    const data = editor.getData();
                    setServices({
                      ...services,
                      description: data,
                    });
                  }}
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
                  type="file"
                  files={services.logo}
                  name="lien"
                  onChange={handleLogo}
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

export default ModalServices;
