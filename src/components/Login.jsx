/* eslint-disable no-unused-vars */
import React from "react";
import { createStore } from "redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

import { Form, Button, Container, Row, Col } from "reactstrap";
// import Axios from 'axios';

toast.configure();
const Login = () => {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = (values) => console.log(values);
  const notifySuccess = () => {
    toast.success("Bienvenue !", {
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
    toast.error("Email ou password incorrect !", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <Container>
      <Row>
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Col>
            <input
              name="email"
              ref={register({
                required: "Required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "invalid email address",
                },
              })}
            />
            {errors.email && errors.email.message}
          </Col>
          <Col>
            <input
              name="username"
              ref={register({
                validate: (value) => value !== "admin" || "Nice try!",
              })}
            />
            {errors.username && errors.username.message}
          </Col>
          <Button color="success" type="submit">
            Submit
          </Button>
        </Form>
      </Row>
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

export default Login;
