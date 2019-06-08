import React from "react";
import "./style.css";

// import { Container } from './styles';

export default function Pedido() {
  return (
    <div className="row">
      <div class="form-group col-8">
        <label>Nome do Profesor</label>
        <input type="text" class="form-control" placeholder="Professor" />
      </div>
      <div class="form-group col-4">
        <label>Quantidade de Equipes</label>
        <input type="text" class="form-control" placeholder="Equipes" />
      </div>
      <div className="col-12">
        <div className="row">
          <div className="col-10">
            <p>Adicionar ou Excluir Campos</p>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-primary btn-sm add">
              +
            </button>
            <button type="button" class="btn btn-secondary btn-sm">
              -
            </button>
          </div>
        </div>
      </div>
      <div class="form-group col-6">
        <label>Nome do ingredite</label>
        <input type="text" class="form-control" placeholder="Ingrediente" />
      </div>
      <div class="form-group col-2">
        <label>Quantidade Grupo</label>
        <input type="text" class="form-control" placeholder="Qtd." />
      </div>
      <div class="form-group col-2">
        <label for="exampleFormControlSelect1">Und. de Medida</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>g</option>
          <option>Kg</option>
          <option>Und.</option>
          <option>L</option>
          <option>ml</option>
        </select>
      </div>
      <div class="form-group col-2">
        <label>Total</label>
        <input type="text" class="form-control" placeholder="Total" />
      </div>
    </div>
  );
}
