import React from "react";
import "./style.css";

// import { Container } from './styles';




export default class Pedido extends React.Component {

  products = [
    {id: 0, name: 'A'},
    {id: 1, name: 'B'},
  ];

  addProducts() {
    this.products.push({id: 2, name: 'C'});
  
    this.addProducts.bind(this);
  
    console.log(this.products);
  }
  
 
  // listProducts = this.products.map((product) => (
      // <div className="prdList row" key={this.product.id}>{this.product.name}</div>
  // ));

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
      <div className="col-12">
        <div className="row">
          <div className="col-10">
            <p>Adicionar ou Excluir Campos</p>
          </div>
          <div className="col-2">
            <button type="button" onClick={this.addProducts} className="btn btn-primary btn-sm add">
              +
            </button>
            <button type="button" className="btn btn-secondary btn-sm">
              -
            </button>
          </div>
        </div>
      </div>
      <div className="form-group col-6">
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
    </div>
  );}
}
