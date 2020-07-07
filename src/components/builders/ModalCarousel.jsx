import React, { useState } from "react";
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

const ModalCarousel = ({ onClick, title, description, link, picture }) => {
    const [modal, setModal] = useState(false);

    const [titleChange, setTitleChange] = useState({ title });
    const [descriptionChange, setDescriptionChange] = useState({ description });
    const [linkChange, setLinkChange] = useState({ link });
    const [pictureChange, setPictureChange] = useState({ picture });

    const [isLoading, setIsLoading] = useState(false);

    const toggle = () => setModal(!modal);

    const putCarousel = async () => {
        try {
            await Axios.put(
                `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/carousels/950e3eb0-4b1d-4e84-8841-7b4a5d087f70`,
                {
                    titleChange,
                    descriptionChange,
                    linkChange,
                    pictureChange,
                }
            );
            setIsLoading(false);
        } catch (err) {
            console.log(err);
        }
    };

    if (isLoading) {
        return <Spinner color="primary" />;
    }

    return (
        <Container>
            <Button color="danger" onClick={toggle}>
                Modifier
            </Button>

            <Modal isOpen={modal} toggle={toggle} size="lg">
                <ModalHeader toggle={toggle}>Carousel</ModalHeader>
                <Form>
                    <ModalBody>
                        <Row>
                            <Col lg="12">
                                <label>{title} </label>
                            </Col>

                            <Col lg="6">Title value</Col>
                            <Col lg="6">
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setTitleChange(e.target.value)
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <label>{description} </label>
                            </Col>

                            <Col lg="6">Descriptif value</Col>
                            <Col lg="6">
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setDescriptionChange(e.target.value)
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <label>{link} </label>
                            </Col>

                            <Col lg="6">Lien value</Col>
                            <Col lg="6">
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setLinkChange(e.target.value)
                                    }
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col lg="12">
                                <label>{picture} </label>
                            </Col>

                            <Col lg="6">Picture value</Col>
                            <Col lg="6">
                                <input
                                    type="text"
                                    onChange={(e) =>
                                        setPictureChange(e.target.value)
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

export default ModalCarousel;
