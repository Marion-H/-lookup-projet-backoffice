import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";

const EditModal = ({ onClick }) => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <Container>
      <Button color="warning" onClick={toggle}>
        Modifier
      </Button>

      <Modal isOpen={modal} toggle={toggle} size="lg">
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <input />
        </ModalBody>

        <ModalFooter>
          <Button color="success" onClick={onClick}>
            Valider
          </Button>{" "}
          <Button color="danger" onClick={toggle}>
            Annuler
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default EditModal;
