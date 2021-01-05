import React, { useState } from "react";
import { Button, Col, Spinner } from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import apiUrl from "../../apiUrl";

export default function DeleteService({ uuid, getService }) {
  const [loading, setLoading] = useState(false);

  const token = useSelector((state) => state.admin.token);

  const notifySuccess = () => {
    toast.success("Service supprimé!", {
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

  const deleteService = async () => {
    try {
      await Axios.delete(`${apiUrl}/services/${uuid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getService();
      notifySuccess();
    } catch (error) {
      notifyError();
    } finally {
      setLoading(false);
    }
  };
  return (
    <Col>
      <Button color="danger" onClick={deleteService}>
        {loading ? <Spinner size="sm" /> : "Supprimer"}
      </Button>
    </Col>
  );
}
