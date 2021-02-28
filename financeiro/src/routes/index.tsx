import React from "react";
import { Route, Switch } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Moedas from "../pages/Moedas";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Cadastro} />
      <Route path="/moedas" exact component={Moedas} />
    </Switch>
  );
};

export default Routes;
