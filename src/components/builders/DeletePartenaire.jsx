import React, { useState } from "react";
import { Button, Col, Spinner } from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiUrl from "../../apiUrl";

export default function DeletePartenaire({ uuid, getPartenaire }) {
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.admin.token);

  const notifySuccess = () => {
    toast.success("Parternaire supprimé!", {
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

  const deletePartenaire = async () => {
    try {
      await Axios.delete(`${apiUrl}/partenaires/${uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getPartenaire();
      notifySuccess();
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return (
    <Col>
      <Button color="danger" onClick={deletePartenaire}>
        {loading ? <Spinner size="sm" /> : "Supprimer"}
      </Button>
    </Col>
  );
}
