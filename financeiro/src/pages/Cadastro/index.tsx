import { Button } from "@material-ui/core";
import { Container, Form, Terms, Sidbar, TextField } from "./styles";
import React, { useRef, useState } from "react";
import toast, { dispatch, Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import {
  getCadastrarRequest,
  getLoginRequest,
} from "../../store/ducks/login/actions";

import { Redirect } from "react-router-dom";

import "./index.css";

const Cadastro = () => {
  const emailInput = useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);
  const loginemailInput = useRef<HTMLInputElement>(null);
  const loginpasswordInput = useRef<HTMLInputElement>(null);

  const dispatch = useDispatch();

  const Cadastrar = async () => {
    const request = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    };

    dispatch(getCadastrarRequest(request));
  };

  const Logar = async () => {
    const request = {
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    };

    dispatch(getLoginRequest(request));
    await seeToken();
  };

  const [permission, setPermisson] = useState<Boolean>(false);

  const seeToken = () => {
    const token = localStorage.getItem("token");
    if (token) {
      setPermisson(true);
    }
  };

  return (
    <>
      <Container>
        <Sidbar>
          <h3>
            Fi <span className="span">nances</span>
          </h3>

          <Form>
            <h3>Sign Up</h3>

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
            <h4>
              Already have an account? <span>Sign In</span>
            </h4>
          </div>

          <TextField type="e-mail" placeholder="Email" ref={loginemailInput} />

          <TextField
            type="password"
            placeholder=" Password"
            ref={loginpasswordInput}
          />

          <Button variant="contained" color="secondary" onClick={Logar}>
            Sign In
            {permission && <Redirect to="/moedas" />}
          </Button>
        </Sidbar>
      </Container>
    </>
  );
};

export default Cadastro;
