import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'

import './style.css';

export default class SideBar extends Component {
  render() {
    return (
        <div className="side-nav bg-light col-2">
          <div className="container">
          <ul>
              <li><NavLink to='/'><p>Lista de pedidos</p></NavLink></li>
              <li><NavLink to='/pedido'><p>Criar pedidos</p></NavLink></li>
              <li><NavLink to='/cadastrar-produtos'><p>Cadastrar Produto</p></NavLink></li>
            </ul>
          </div>
        </div>
    );
  }
}
