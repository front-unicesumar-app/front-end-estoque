import React, { Component } from "react";
import './style.css';
import {Switch, Route} from 'react-router-dom'

import Pedido from './../pedidos/cadastro/Pedido';
import ListaDePedidos from '../pedidos/lista-de-pedidos/ListaDePedidos';
import CadastrarProdutos from '../produtos/cadastrar-produtos/CadastrarProdutos'

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="col-12">
          <Switch>
          <Route exact path='/' component={ListaDePedidos}/>
          <Route path='/cadastrar-pedido' component={Pedido}/>
          <Route path='/produtos' component={CadastrarProdutos}/>
          </Switch>
        </div>
      </div>
    );
  }
}
