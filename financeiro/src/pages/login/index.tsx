import { Button } from "@material-ui/core";

import React, { useEffect, useRef, useState } from "react";
import toast, { dispatch, Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  getCadastrarRequest,
  getLoginRequest,
} from "../../store/ducks/login/actions";
import CircularProgress from '@material-ui/core/CircularProgress'

import { Redirect,Link } from "react-router-dom";


import { Container, Form, Sidbar, Terms, TextField } from "../Cadastro/styles";

const Login  = () => {

  const loginemailInput = useRef<HTMLInputElement>(null);
  const loginpasswordInput = useRef<HTMLInputElement>(null);
  
 



  const dispatch = useDispatch();



  const Logar = async () => {
    const request:any  = {
    email: loginemailInput.current?.value,
    password: loginpasswordInput.current?.value
  }

  if(loginemailInput?.current?.value !== "" && loginpasswordInput.current?.value !== ""){
    
    dispatch(getLoginRequest(request));
    await seeToken();

  
    
  }

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

           
          </Form>
          <div>
            <Terms>
    
            </Terms>
            <h4>
            Not have an account yet?  <Link to="/"><span>Sign Up</span></Link>
            </h4>
          </div>

          <TextField type="e-mail" placeholder="Email" ref={loginemailInput}  />

          <TextField
            type="password"
            placeholder=" Password"
            ref={loginpasswordInput}
          />

          <Button variant="contained" color="secondary" onClick={Logar}>
            Sign In
          
          </Button>
        </Sidbar>
     
      </Container>
      {permission && <Redirect to="/home" />}
    </>
  );
};

export default Login;
