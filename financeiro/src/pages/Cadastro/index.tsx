import { Button } from "@material-ui/core";
import { Container, Form, Terms, Sidbar, TextField } from "./styles";
import React, { useEffect, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";


import { useDispatch } from "react-redux";
import { getCadastrarRequest } from "../../store/ducks/login/actions";

import { Link } from "react-router-dom";

import "./index.css";

const Cadastro = () => {
  const dispatch = useDispatch();
  const nameInput = useRef<HTMLInputElement>(null)
  const emailInput = React.useRef<HTMLInputElement>(null);
  const passwordInput = useRef<HTMLInputElement>(null);

  const Cadastrar = async () => {
    const request: any = {
      name: nameInput?.current?.value,
      email: emailInput.current?.value,
      password: passwordInput.current?.value,
    };

    if (request.email !== '' || request.password !== '' || request.name !== '') {
      try {
        dispatch(getCadastrarRequest(request));
        toast.success('Successful registration. Log in to continue ')
      } catch (e) {
        console.log(e);
      }
    } else {
      toast.error('Fill in all fields!')
    }
  }




  return (
    <>
      <Container>
        <Sidbar>
          <Toaster />
          <img
          src="https://media.giphy.com/media/kbo6cgaxHyA8zvpRic/giphy.gif"
          width="60px"
          title="gif"
        />
          <h3>
            Fi <span className="span">nances</span>
          </h3>

          <Form>
            

            <h4>
              Você já tem uma conta ?{" "}
              <Link to="/login">
                <span>entrar</span>
              </Link>
            </h4>

         
      
              <TextField type="email" placeholder="Name"  required ref={nameInput} />
            <TextField type="email" placeholder="Email"  required ref={emailInput} />


            <TextField
              type="password"
              placeholder=" Password"
              required
              ref={passwordInput}
            />
            <Button variant="contained" color="secondary" onClick={Cadastrar}>
            inscrever-se
            </Button>
          </Form>
          <div>
            <Terms>

            Ao inscrever-se, concordo com a Política de Privacidade
           <br />  e os Termos de
              Serviços
         
            </Terms>
          </div>
        </Sidbar>
      </Container>
    </>
  );
};

export default Cadastro;
