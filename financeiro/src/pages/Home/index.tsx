import React, { useEffect, useState } from "react";

import { Link, Redirect } from "react-router-dom";

import { Container } from "./styles";

const Home = () => {
  const [token] = useState<string | null>(localStorage.getItem("token"));

  return (
    <Container>
      {!token && <Redirect to="/cadastro" />}

      <h1> Welcome!</h1>
      <h3>This is the best application to manage your finances</h3>

      <ul>
        <li>
          <Link to="/currency">Currencies</Link>
        </li>
        <li>
          <Link to="/">New Expense or Deposit</Link>
        </li>
        <li>
          <Link to="/">See your finances</Link>
        </li>
      </ul>

      <div>
        <img
          src="https://media.giphy.com/media/kbo6cgaxHyA8zvpRic/giphy.gif"
          width="400px"
          title="gif"
        />
      </div>
    </Container>
  );
};

export default Home;
