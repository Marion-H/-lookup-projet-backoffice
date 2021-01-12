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
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import jwt from "jsonwebtoken";
import { imgurToken } from "../../imgurToken";
import { logout } from "../../store/actionCreators";
import apiUrl from "../../apiUrl";

toast.configure();
const ModalConferences = ({
  title,
  subject,
  date,
  picture,
  uuid,
  getConference,
}) => {
  const notifySuccess = () => {
    toast.success("Conference bien modifié !", {
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

  const [conferences, setConferences] = useState({
    title,
    subject,
    date,
    picture,
  });
  const [loading, setLoading] = useState(false);

  const { register } = useForm();
  const dispatch = useDispatch();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);

  const handlePicture = (e) => {
    setConferences({ ...conferences, picture: e.target.files[0] });
  };

  const putConferences = async (e) => {
    e.preventDefault();
    try {
      const resImgur = await Axios.post(
        "https://api.imgur.com/3/image",
        conferences.picture,
        {
          headers: { Authorization: `Client-ID ${imgurToken}` },
        }
      );
      await Axios.put(
        `${apiUrl}/conferences/${uuid}`,
        {
          title: conferences.title,
          subject: conferences.subject,
          date: conferences.date,
          picture: resImgur.data.data.link,
        },
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
    <Col>
      <Button color="warning" onClick={isAuthenticated}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Conferences</ModalHeader>
        <Form onSubmit={putConferences}>
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
                <label>Subject</label>
              </Col>
            </Row>
            <Row>
              <Col lg="6">{subject}</Col>
              <Col lg="6">
                <input
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
              <Col lg="6">{date}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="date"
                  name="lien"
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
              <Col lg="6">{picture}</Col>
              <Col lg="6">
                <input
                  ref={register({ required: true })}
                  type="file"
                  files={conferences.picture}
                  name="image"
                  onChange={handlePicture}
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

export default ModalConferences;
