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
} from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";

toast.configure();
const AddPresse = ({ onClick }) => {
  const notifySuccess = () => {
    toast.success("Relation Presse bien ajouté !", {
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

  const [presse, setPresse] = useState({});
  const { handleSubmit, register } = useForm();
  // const onSubmit = (values) => console.log(values);

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);
  const postPresse = async () => {
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/press/`,
        presse,
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
        Ajouter
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Conferences</ModalHeader>
        <Form onSubmit={handleSubmit(postPresse)}>
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
                    setPresse({
                      ...presse,
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
                  name="description"
                  type="text"
                  onChange={(e) =>
                    setPresse({
                      ...presse,
                      description: e.target.value,
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
                    setPresse({
                      ...presse,
                      picture: e.target.value,
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
    </Container>
  );
};

export default AddPresse;
