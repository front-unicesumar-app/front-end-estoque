import React, { Component } from "react";
import './style.css';

import Cadastro from '../cadastro/Cadastro';

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="container main">
        <div className="col-12">
          <Cadastro></Cadastro>
        </div>
      </div>
    );
  }
}
