import React from "react";
import { Button, Col } from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

export default function DeleteProduct({ uuid, getProduct }) {
  const token = useSelector((state) => state.admin.token);

  const notifySuccess = () => {
    toast.success("Produit supprimé!", {
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
    toast.error("Erreur !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const deleteProduct = async () => {
    try {
      await Axios.delete(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/products/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getProduct();
      notifySuccess();
    } catch (error) {
      console.log(error);
      notifyError();
    }
  };
  return (
    <Col>
      <Button color="danger" onClick={deleteProduct}>
        Supprimer
      </Button>
    </Col>
  );
}
