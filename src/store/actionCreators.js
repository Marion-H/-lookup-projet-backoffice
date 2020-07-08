import Axios from "axios";
import { toast } from "react-toastify";

export const logout = () => (dispatch) => {
  dispatch({
    type: "LOGOUT",
  });
  toast.info("Deconnecter");
};

export const login = ({ email, password }, history) => async (dispatch) => {
  try {
    const {
      data: { token },
    } = await Axios.post(
      `https://btz-js-202003-p3-lookup-back.jsrover.wilders.dev/admin/login`,
      {
        email,
        password,
      }
    );
    dispatch({ type: "LOGIN", payload: token });
    sessionStorage.setItem("token", token);
    toast.success("Connecter");
    history.push("/");
  } catch (error) {
    console.log(error);
    toast.error("Email ou password érroné...");
  }
};

export const reconnect = (token) => (dispatch) => {
  dispatch({
    type: "RECONNECT",
    payload: token,
  });
};
