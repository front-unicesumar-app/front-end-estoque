import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'

// import { Container } from './styles';




export default class Pedido extends React.Component {

  constructor(props) {
    super(props)
    this.addProducts = this.addProducts.bind(this);

    this.renderList = this.renderList.bind(this);
  }
  state = {
    products: [
      {id: 0, name: 'Cebola', qtd: 5, un: 'kg', total: 10},
      {id: 1,  name: 'Maçã', qtd: 2, un: 'Und.', total: 4},
    ]
  }

  renderList() {
    console.log(this.state.products);
    return this.state.products.map(list => (
      <tr key={list.id}>
        <th>{list.name}</th>
        <th>{list.qtd}</th>
        <th>{list.un}</th>
        <th>{list.total}</th>
      </tr>
    ))
  }

  addProducts() {
    this.setState( {products: this.state.products.concat({id: 2,  name: 'Suco', qtd: 2, un: 'litros', total: 4})})
  }

  render(){
  return (
    <div className="row">
      <div className="row">
        {this.listProducts}
      </div>
      <div className="form-group col-8">
        <label>Nome do Professor</label>
        <input type="text" className="form-control" placeholder="Professor" />
      </div>
      <div className="form-group col-4">
        <label>Quantidade de Equipes</label>
        <input type="text" className="form-control" placeholder="Equipes" />
      </div>        
        <div className="form-group col-5">
          <label>Nome do ingrediente</label>
          <input type="text" className="form-control" placeholder="Ingrediente" />
        </div>
        <div className="form-group col-2">
          <label>Quantidade Grupo</label>
          <input type="text" className="form-control" placeholder="Qtd." />
        </div>
        <div className="form-group col-2">
          <label htmlFor="exampleFormControlSelect1">Und. de Medida</label>
          <select className="form-control" id="exampleFormControlSelect1">
            <option>g</option>
            <option>Kg</option>
            <option>Und.</option>
            <option>L</option>
            <option>ml</option>
          </select>
        </div>
        <div className="form-group col-2">
          <label>Total</label>
          <input type="text" className="form-control" placeholder="Total" />
        </div>
        <div className="form-group col-1">
          <button type="button" onClick={this.addProducts} className="btn btn-primary btn-sm add">
            +
          </button>
          <button type="button" className="btn btn-secondary btn-sm">
            -
          </button>
        </div>

        <div className="col-12">
        <div className="row">
          <div className="col-10">
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Quantidade</th>
                  <th>Un</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                {this.renderList()}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );}
}
