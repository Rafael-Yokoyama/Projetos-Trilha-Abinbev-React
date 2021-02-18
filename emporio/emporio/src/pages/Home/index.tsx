import React, { useEffect, useState } from "react";

import Logo from "../../img/LOGO.png";


import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import axios from "axios";
import "./home.scss";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [beers, setBeers] = useState([]);


  const token = localStorage.getItem("token");

  

  useEffect(() => {
    if (token !== null) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .get("http://localhost:4000/categories", { headers: headers })
        .then((resposta) => setCategories(resposta.data));
    }
  }, []);
  useEffect(() => {
    if (token !== null) {
      const headers = {
        Authorization: `Bearer ${token}`,
      };
      axios
        .get("http://localhost:4000/beers", { headers: headers })
        .then((resposta) => setBeers(resposta.data));
    }
  }, []);

  return (
    <>
      <div className="text-top">
        <p>
          A Maior <span>Loja Especializada de Cervejas</span> do Brasil.
        </p>
      </div>
      <header className="header">
        <nav className="navbar">
          <div className="nav-menu">
            <div>
              {" "}
              <img src={Logo} width="280px"></img>
            </div>
          </div>
          <div className="input">
         <input
          type="text"
          placeholder="Busque pela marca,estilo ou sabor "
          onChange={(event) => console.log(event)}
         
        /> 
         </div>

          <div className="icons-header">
            <FaUser className="icons" />

            <FaShoppingCart className="icons" />
          </div>
     
        </nav>
      
        <div className="categories">
          {categories !== undefined &&
            categories.map((item: any) => (
              <div key={item.id}>
                <ul>
                  <li>
                    <p>
                      {" "}
                      <a href="">{item}</a>
                    </p>
                  </li>
                </ul>
              </div>
            ))}

          <div className="Fale">
            {" "}
            <p>
              {" "}
              <a href=""> Fale Conosco </a>
            </p>{" "}
          </div>
        </div>
      </header>

      <section className="Beers">
        {beers?.map((i: any) => (
          <ul className="container_beers" key={i.id}>
            <li>
              <img  className="img" src={i.image} width="140px" height="180px" alt={i.title} />
              <p className="description">{i.description}</p>
              <p className="title">{i.title}</p>
              <p className="price">{i.price}</p>
              <button>Adicionar</button>
            </li>
          </ul>
        ))}
      </section>
    </>
  );
};

export default Home;
