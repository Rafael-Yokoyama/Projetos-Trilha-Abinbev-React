import React from "react";
import { Route, Switch } from "react-router-dom";

import Cadastro from "../pages/Cadastro";
import Home from "../pages/Home";
import Login from "../pages/login";
import Currency from "../pages/See_Currency";

const Routes = () => {
  return (
    <Switch>
      <Route path="/home" exact component={Home}/>
      <Route path="/" exact component={Cadastro} />
      <Route path="/login" exact component={Login} />
      <Route path="/currency" exact component={Currency} />
    </Switch>
  );
};

export default Routes;
