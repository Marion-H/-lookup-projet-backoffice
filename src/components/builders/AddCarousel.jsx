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

toast.configure();

const AddCarousel = () => {
  const notifySuccess = () => {
    toast.success("Partenaire bien ajouté !", {
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

  const [carousel, setCarousel] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  const { register } = useForm();

  const toggle = () => setModal(!modal);

  const token = useSelector((state) => state.admin.token);
  const postCarousel = async (e) => {
    e.preventDefault();
    try {
      await Axios.post(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/carousels/`,
        carousel,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      notifySuccess();
    } catch (err) {
      notifyError();
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Container>
      <Button color="success" onClick={toggle}>
        Ajouter
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Carousels</ModalHeader>
        <Form onSubmit={postCarousel}>
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
              <Col>
                <textarea
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
                    setCarousel({
                      ...carousel,
                      picture: e.target.value,
                    })
                  }
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12">
                <label> Link</label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input
                  ref={register({ required: true })}
                  type="text"
                  name="image"
                  onChange={(e) =>
                    setCarousel({
                      ...carousel,
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
    </Container>
  );
};

export default AddCarousel;
