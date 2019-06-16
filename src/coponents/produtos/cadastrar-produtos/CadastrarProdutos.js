import React, { Fragment } from 'react';
import Form from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron'
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Card  from 'react-bootstrap/Card';
import './style.css';
// import { Container } from './styles';

export default class CadastrarProdutos extends React.Component {
  constructor(props) {
    super(props);

    this.renderList = this.renderList.bind(this);
  }

  produtos = [
    {id: 1, name: 'Tomate', un: 'Kg', img: 'https://www.infoescola.com/wp-content/uploads/2011/01/tomate_345187874.jpg'},
  ]

  renderList() {
    return (this.produtos.map(list => (
      <Card key={list.id}>
        <Card.Img variant="top" src={list.img} />
        <Card.Body>
          <Card.Title>{list.name}</Card.Title>
          <Card.Text>
            Unidade: {list.un}
          </Card.Text>
        </Card.Body>
      </Card>
    ))
    )
  }

  render() {
    return (
      <Fragment>
        <Jumbotron>
          <h3>Cadstrar produto</h3>
          <Form>
            <Form.Group className="name-field">
              <Form.Label>Nome do produto</Form.Label>
              <Form.Control type="text" placeholder="Nome do produto" />
            </Form.Group>
            <Form.Group className="name-field">
              <Form.Label>Unidade</Form.Label>
              <Form.Control as="select">
                <option>Kg</option>
                <option>g</option>
                <option>Un</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="un-field">
              <Form.Label>Imagem do produto</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control
                  placeholder="Url da imagem"
                  aria-label="Imagm"
                  aria-describedby="imagem-produto" />
                  <InputGroup.Append>
                  <Button variant="outline-secondary">Procurar</Button>
                  </InputGroup.Append>
              </InputGroup>
            </Form.Group>
            <Button variant="primary" size="md">Cadastrar</Button>
          </Form>
        </Jumbotron>

        <div className="lista-produto">
          <h3>Lista de produtos</h3>
          {this.renderList()}
          {/* <Card>
            <Card.Img variant="top" src="https://www.infoescola.com/wp-content/uploads/2011/01/tomate_345187874.jpg" />
            <Card.Body>
              <Card.Title>Tomate</Card.Title>
              <Card.Text>
                Unidade: Kg
              </Card.Text>
            </Card.Body>
          </Card> */}
        </div>
      </Fragment>
    );
  }
}
