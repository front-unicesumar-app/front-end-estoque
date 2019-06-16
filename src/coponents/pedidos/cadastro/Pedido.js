import React from "react";
import "./style.css";
import Table from 'react-bootstrap/Table'

// import { Container } from './styles';




export default class Pedido extends React.Component {

  constructor(props) {
    super(props)
    this.addProducts = this.addProducts.bind(this);

    this.renderList = this.renderList.bind(this);

    this.setUser = this.setUser.bind(this);
    this.setGroupes = this.setGroupes.bind(this);
    this.setProductName = this.setProductName.bind(this)
    this.setQtd = this.setQtd.bind(this);
    this.setTotal = this.setTotal.bind(this);
    this.setUnd = this.setUnd.bind(this);
    this.state.user.name = '';
    this.state.user.groupes = '';
    
  }
      state = {
        user: {
          name: '', 
        groupes: ''
      },
        products: [],
        product:{
          id: null,
          name: '',
          qtd: null,
          und:'',
          total: null
        }
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
    this.setState( {products: this.state.products.concat({
      id: null,  
      name: this.state.product.name, 
      qtd: this.state.product.qtd, 
      und: this.state.product.und, 
      total: this.state.product.total})})
  }

  setUser(event){
    this.setState({
        user:{name: event.target.value}
    })
  }
  setGroupes(event){
    this.setState({
      user: {groupes: event.target.value}
    })
  }

  setProductName(event){
    this.setState({
      product:{name: event.target.value}
    })
  }

  setQtd(event){
    this.setState({
      product:{qtd: event.target.value}
    })
  }

  setUnd(event){
    this.setState({
      product:{und: event.target.value}
    })
  }

  setTotal(event){
    this.setState({
      product:{total: event.target.value}
    })
  }

  render(){
  return (
    <div className="row">
      <div className="row">
        {this.listProducts}
      </div>
      <div className="form-group col-8">
        <label>Nome do Professor</label>
        <input type="text" className="form-control" placeholder="Professor" onChange={this.setUser}/>
      </div>
      <div className="form-group col-4">
        <label>Quantidade de Equipes</label>
        <input type="text" className="form-control" placeholder="Equipes" onChange={this.setGroupes}/>
      </div>        
        <div className="form-group col-5">
          <label>Nome do ingrediente</label>
          <input type="text" className="form-control" placeholder="Ingrediente" onChange={this.setProductName}/>
        </div>
        <div className="form-group col-2">
          <label>Quantidade Grupo</label>
          <input type="text" className="form-control" placeholder="Qtd." onChange={this.setQtd}/>
        </div>
        <div className="form-group col-2">
          <label htmlFor="exampleFormControlSelect1">Und. de Medida</label>
          <select className="form-control" id="exampleFormControlSelect1" onChange={this.setUnd}>
            <option>g</option>
            <option>Kg</option>
            <option>Und.</option>
            <option>L</option>
            <option>ml</option>
          </select>
        </div>
        <div className="form-group col-2">
          <label>Total</label>
          <input type="text" className="form-control" value={this.state.product.total} placeholder="Total"/>
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
