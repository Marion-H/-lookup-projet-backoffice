import React from "react";
import { Button, Col } from "reactstrap";
import Axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";

import { logout } from "../../store/actionCreators";

export default function DeleteConference({ uuid, getConference }) {
  const token = useSelector((state) => state.admin.token);
  const dispatch = useDispatch();

  const notifySuccess = () => {
    toast.success("Conférence supprimée!", {
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

  const deleteConference = async () => {
    try {
      await Axios.delete(
        `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/conferences/${uuid}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      getConference();
      notifySuccess();
    } catch (error) {
      dispatch(logout());
      notifyError();
    }
  };
  return (
    <Col>
      <Button color="danger" onClick={deleteConference}>
        Supprimer
      </Button>
    </Col>
  );
}
