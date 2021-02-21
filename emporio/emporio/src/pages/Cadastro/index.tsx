/* eslint-disable jsx-a11y/alt-text */
import axios from "axios";
import React, { useRef, useState} from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../img/LOGO.png";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import "./cadastro.scss";


const Cadastro = () => {
  const nameInput =useRef<HTMLInputElement>(null);
  const emailInput =useRef<HTMLInputElement>(null);
  const passwordInput =useRef<HTMLInputElement>(null);
  const ageInput =useRef<HTMLInputElement>(null);

  const [logado, setLogado] = useState(false)

  const Cadastrar = () => {
  const request = {
    email: emailInput.current?.value,
    password: passwordInput.current?.value,
    name: nameInput.current?.value,
    age: ageInput.current?.value
  }

  if( Number(ageInput.current?.value) >= 18){
    axios.post(" http://localhost:4000/register",request)
  .then(resposta => {
    localStorage.setItem("token", resposta.data.accessToken)
      setLogado(true)
  });
  }else{
    alert(" IDADE TEM QUE SER 18 OU SUPERIOR")
  }  
  
}

  return (
 
   <div  >
      
      <div className="text-cadastro">
  <p>
         
          A Maior <span>Loja Especializada de Cervejas</span> do Brasil.
        </p>
      </div>
      <header className="header_cadastro">
        <nav className="navbar">
          <div className="nav-menu">
            <div>
              {" "}
              <img src={Logo} width="330px"></img>
            </div>
          </div>
       
         {/*  <div className="icons-header">
            <FaUser className="icons" />

            <FaShoppingCart className="icons" />
          </div> */}
        </nav>
        <div className="formulario">
        <h1>Cadastre-se</h1>

        <div className="inputs">
          <div>
            <input type="text" placeholder="Nome"  ref={nameInput} />
          </div>
          <div>
            <input type="text" placeholder="Email"   ref={emailInput}/>
          </div>
          <div>
            <input type="password" placeholder="Senha"  ref={passwordInput} />
          </div>
          <div>
            <input type="number" placeholder="Idade"  ref={ageInput} />
          </div>
          <button  onClick={Cadastrar}>Cadastrar</button>
        </div>
        {logado && <Redirect to="/home" />}
      </div>
      </header>
     
   
    </div>
  );
};

export default Cadastro;
