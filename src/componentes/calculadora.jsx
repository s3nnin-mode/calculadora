import React from "react";
import '../stylesheet/calculadora.css';
import Boton from "./boton";
import BtnGrande from "./btnGrande";

import { evaluate } from "mathjs";

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(valor) {
    if (this.state.input === '000') {
      this.setState({
        input: '0'
      })
      return
    }

    const arrInput = this.state.input.split('');

    if (arrInput[0] === '0' && arrInput[1] !== '.') {
      arrInput.splice(0, 1)
      this.setState({
        input: arrInput.join('') + valor
      })
      return
    }

    this.setState(prevState => ({
      input: prevState.input + valor
    }))
  }

  reset() {
    this.setState({
      input: '0'
    })
  }

  result() {
    this.setState(prevState => ({
      input: evaluate(prevState.input)
    }))
  }

  render() {
    return (
      <div className="calculadora">
        <div id="display">
          {
          this.state.input
          }
        </div>
        <div className="btns-contenedor">
          <button id='clear' className='btn-grande-ac' onClick={() => this.reset()}>AC</button>
          <Boton id='divide' f={this.handleClick}>/</Boton>
          <Boton id='multiply' f={this.handleClick}>*</Boton>
          <Boton id='seven' f={this.handleClick}>7</Boton>
          <Boton id='eight' f={this.handleClick}>8</Boton>
          <Boton id='nine' f={this.handleClick}>9</Boton>
          <Boton id='subtract' f={this.handleClick}>-</Boton>
          <Boton id='four' f={this.handleClick}>4</Boton>
          <Boton id='five' f={this.handleClick}>5</Boton>
          <Boton id='six' f={this.handleClick}>6</Boton>
          <Boton id='add' f={this.handleClick}>+</Boton>
          <Boton id='one' f={this.handleClick}>1</Boton>
          <Boton id='two' f={this.handleClick}>2</Boton>
          <Boton id='three' f={this.handleClick}>3</Boton>
          <button id="equals"  className='btn-grande-igual' onClick={() => this.result()}>=</button>
          <BtnGrande id='zero' className='btn-grande-cero' f={this.handleClick}>0</BtnGrande>
          <Boton id='decimal' f={this.handleClick}>.</Boton>
        </div>
      </div>
    )
  }

}

export default Calculadora