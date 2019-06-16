import React, { Fragment } from 'react';
import './style.css'
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

// import { Container } from './styles';

export default class ListaDePedidos extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  pedidos = [
    {id: 0, name: 'Pedido 1', date: '25/05/2019'},
    {id: 1, name: 'Pedido 2', date: '28/05/2019'},
    {id: 2, name: 'Pedido 3', date: '01/06/2019'}
  ]

  renderList() {
    return(
      this.pedidos.map(list => (
        <ListGroupItem key={list.id}>
          <div className="item-name">
            {list.name}
          </div>
          <div className="item-date">
            {list.date}
          </div>
          <div className="item-actions">
            <Button variant="primary" size="sm">Ver</Button>
            <Button variant="danger" size="sm">Excluir</Button>
          </div>
        </ListGroupItem>
      ))
    )
  }


  render() {
    return (
      <Fragment>
        <h2>Lista de Pedidos</h2>
        <ListGroup>
          <div className="list-subheader">
            <div className="sub-name">
              <span>Nome</span>
            </div>
            <div className="sub-date">
              <span>Data</span>
            </div>
            <div className="sub-actions">
              <span>Ações</span>
            </div>
          </div>
          {this.renderList()}
        </ListGroup>
      </Fragment>
    );
  }
}
