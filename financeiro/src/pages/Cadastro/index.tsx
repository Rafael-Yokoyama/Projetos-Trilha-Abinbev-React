import { Button } from "@material-ui/core";
import { Container, Form, Terms, Sidbar, TextField } from "./styles";
import React, { useEffect, useRef, useState } from "react";
import toast, { dispatch, Toaster } from "react-hot-toast";
import CircularProgress from "@material-ui/core/CircularProgress";

import { useDispatch, useSelector } from "react-redux";
import { getCadastrarRequest } from "../../store/ducks/login/actions";

import { Redirect, Link } from "react-router-dom";

import "./index.css";

const Cadastro = () => {
  const dispatch = useDispatch();

  const emailInput = React.useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const Cadastrar = async () => {
    const request: any = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    };

    if (
      emailInput.current?.value !== "" &&
      passwordInput.current?.value !== ""
    ) {
      dispatch(getCadastrarRequest(request));
    } else {
      toast.error("Not able to register!");
    }
  };

  return (
    <>
      <Container>
        <Sidbar>
          <Toaster />

          <h3>
            Fi <span className="span">nances</span>
          </h3>

          <Form>
            <h3>Sign Up</h3>

            <h4>
              Already have an account?{" "}
              <Link to="/login">
                <span>Sign In</span>
              </Link>
            </h4>
            <TextField type="email" placeholder="Email" ref={emailInput} />

            <TextField
              type="password"
              placeholder=" Password"
              ref={passwordInput}
            />
            <Button variant="contained" color="secondary" onClick={Cadastrar}>
              Sign Up
            </Button>
          </Form>
          <div>
            <Terms>
              By signing up, I agree to the Privacy Policy <br /> and Terms of
              Service
            </Terms>
          </div>
        </Sidbar>
      </Container>
    </>
  );
};

export default Cadastro;
