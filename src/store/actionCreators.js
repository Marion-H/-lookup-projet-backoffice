import Axios from "axios";
import { toast } from "react-toastify";

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  sessionStorage.clear();
  toast.info("Deconnecter");
};

export const login = ({ email, password }, history) => async (dispatch) => {
  try {
    const {
      data: { token, uuid },
    } = await Axios.post(
      `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/admin/login`,
      {
        email,
        password,
      }
    );
    dispatch({ type: "LOGIN", payload: token });
    dispatch({ type: "UUIDLOOKUP", payload: uuid });
    sessionStorage.setItem("token", token);
    sessionStorage.setItem("uuid", uuid);

    toast.success("Connecter");
    history.push("/");
  } catch (error) {
    console.log(error);
    toast.error("Email ou password erroné...");
  }
};

export const reconnect = (token) => (dispatch) => {
  dispatch({
    type: "RECONNECT",
    payload: token,
  });
};
