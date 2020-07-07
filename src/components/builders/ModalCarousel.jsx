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

toast.configure();
const ModalCarousel = ({
    onClick,
    title,
    description,
    link,
    picture,
    uuid,
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
    const { handleSubmit, register, errors } = useForm();
    // const onSubmit = (values) => console.log(values);

    const toggle = () => setModal(!modal);

    const token =
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwODAzMjkyLWE4YTgtNGVlYy04OTViLTliODlmYzk1OWY0ZiIsImVtYWlsIjoiYW50aG9uaW42NEBsb29rdXAuZnIiLCJpYXQiOjE1OTQxMjcxMzQsImV4cCI6MTU5NDEzMDczNH0.mgJ0fcy2e3MKPpB_SThS28vrVsyfiQT7Te5cCp2PH3Q";

    const putCarousel = async () => {
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
            notifySuccess();
        } catch (err) {
            notifyError();
            console.log(err);
        }
    };

    return (
        <Container>
            <Button color="danger" onClick={toggle}>
                Modifier
            </Button>

            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Carousel</ModalHeader>
                <Form onSubmit={handleSubmit(putCarousel)}>
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
                        <Button color="primary" onClick={toggle}>
                            Valider
                        </Button>{" "}
                        <Button color="secondary" onClick={toggle}>
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
