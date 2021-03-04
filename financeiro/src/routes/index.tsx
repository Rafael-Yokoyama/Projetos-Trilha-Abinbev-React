import React from "react";
import { Route, Switch } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Dashboard from "../pages/Dashboard";
import Finances from "../pages/Finances";

import Login from "../pages/login";
import Currency from "../pages/See_Currency";

const Routes = () => {
  return (
    <Switch>
    
      <Route path="/" exact component={Cadastro} />
      <Route path="/login" exact component={Login} />
      <Route path="/dashboard" exact component={Dashboard} />
      <Route path="/currency" exact component={Currency} />
      <Route path="/finances" exact component={Finances} />
    </Switch>
  );
};

export default Routes;
