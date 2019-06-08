import React from "react";

// import { Container } from './styles';

export default function Cadastro() {
  return (
    <div className="row">
      <div class="form-group col-5">
        <label>Nome do ingredite</label>
        <input type="text" class="form-control" placeholder="Ingrediente" />
      </div>
      <div class="form-group col-2">
        <label>Quantidade Grupo</label>
        <input type="text" class="form-control" placeholder="Qtd."/>
      </div>
      <div class="form-group col-2">
        <label for="exampleFormControlSelect1">Und. de Medida</label>
        <select class="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
      <div class="form-group col-2">
        <label>Total</label>
        <input type="text" class="form-control" placeholder="Total"/>
      </div>
    </div>
  );
}
