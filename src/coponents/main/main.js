import React, { Component } from "react";
import './style.css';

import Pedido from '../cadastro/Pedido';

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="container main">
        <div className="col-12">
          <Pedido></Pedido>
        </div>
      </div>
    );
  }
}
