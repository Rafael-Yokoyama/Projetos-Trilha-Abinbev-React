
import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Logo from "../../img/LOGO.png";

import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";

import axios from "axios";

const Home = () => {
  
  return (
    <>
        <header className="header">
        <nav className="navbar">
          <div className="nav-menu">
            <div>
              {" "}
              <img src={Logo} width="330px"></img>
            </div>
          </div>

          <div className="icons-header">
            <FaUser className="icons" />

            <FaShoppingCart className="icons" />
          </div>
        </nav>
      </header>
    </>
  );
};

export default Home;