import React, { Component } from 'react';
import {NavLink} from 'react-router-dom'
import ListGroup from 'react-bootstrap/ListGroup'

import './style.css';

export default class SideBar extends Component {
  render() {
    return (
      <div className="side-nav bg-light">
        <ListGroup>
          <ListGroup.Item>
          <NavLink to='/'>Lista de pedidos</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
          <NavLink to='/cadastrar-pedido'>Criar pedidos</NavLink>
          </ListGroup.Item>
          <ListGroup.Item>
          <NavLink to='/cadastrar-produtos'>Cadastrar produtos</NavLink>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}
