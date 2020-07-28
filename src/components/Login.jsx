/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Form, Button, Container, Row, Col, Spinner } from "reactstrap";

import { login } from "../store/actionCreators";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const { handleSubmit, register, errors } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.admin.token);

  useEffect(() => {
    if (token) {
      history.push("/");
    }
    //eslint-disable-next-line
  }, [token]);

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      await dispatch(login({ ...data }, history));
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  if (error) {
    return <div>{error}</div>;
  }
  return (
    <Container className="d-flex flex-column align-items-center">
      <Row className="mt-5">
        <Col>
          <h1>Login</h1>
        </Col>
      </Row>
      <Row>
        <Form
          onSubmit={handleSubmit(onSubmit)}
          className="d-flex flex-column align-items-center"
        >
          <Col>
            <input
              className="mb-3 mt-4"
              name="email"
              placeholder="email"
              type="text"
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
              className="mb-4"
              name="password"
              placeholder="password"
              type="password"
              ref={register({
                required: "Required",
              })}
            />
            {errors.password && errors.password.message}
          </Col>
          <Button color="success" type="submit" disabled={loading}>
            {loading ? <Spinner size="sm" /> : "Submit"}
          </Button>
        </Form>
      </Row>
    </Container>
  );
};

export default Login;
