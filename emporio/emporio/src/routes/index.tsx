import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Cadastro from '../pages/Cadastro'

const Routes = () => {
    return (
        <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/" exact component={Cadastro} />
        </Switch>
    )
}

export default Routes