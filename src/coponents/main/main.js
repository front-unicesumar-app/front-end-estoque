import React, { Component } from "react";
import './style.css';
import {Switch, Route} from 'react-router-dom'

import Pedido from '../cadastro/Pedido';
import ListaDePedidos from '../lista-de-pedidos/ListaDePedidos';
import CadastrarProdutos from '../cadastrar-produtos/CadastrarProdutos'

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="container main">
        <div className="col-12">
          <Switch>
          <Route exact path='/' component={ListaDePedidos}/>
          <Route path='/pedido' component={Pedido}/>
          <Route path='/cadastrar-produtos' component={CadastrarProdutos}/>
          </Switch>
        </div>
      </div>
    );
  }
}
