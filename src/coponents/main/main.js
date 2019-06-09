import React, { Component } from "react";
import './style.css';
import {Switch, Route} from 'react-router-dom'

import Pedido from '../cadastro/Pedido';

// import { Container } from './styles';

export default class Main extends Component {
  render() {
    return (
      <div className="container main">
        <div className="col-12">
          <Switch>
          <Route path='/pedido' component={Pedido}/>
          </Switch>
        </div>
      </div>
    );
  }
}
