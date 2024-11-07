import React from "react";
import '../stylesheet/calculadora.css';
import Boton from "./boton";
import BtnGrande from "./btnGrande";

import { evaluate } from "mathjs";

class Calculadora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '0'
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(valor) {
    // if (this.state.input === '000') {
    //   this.setState({
    //     input: '0'
    //   })
    //   return
    // }

    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

    this.setState(prevState => {
      const newInput = prevState.input + valor;
      const arrInput = newInput.split('');
      console.log('arrInput', arrInput[arrInput.length - 1])
      if (arrInput[0] === '0' && arrInput[1] === '0') { //CASO PARA NO PERMITIR MAS DE UN '0' CONSECUTIVO (SOLO AL INICIO)
        return { input: '0' }
      } else if (arrInput[0] === '0' && numeros.some(n => n === arrInput[1])) { //CASO PARA NO PERMITIR '0' ANTES DE UN NUMERO (SOLO AL INICIO)
        return { input: valor}
      } else if (arrInput[arrInput.length - 1] === '.' && arrInput[arrInput.length - 2] === '.') {
        return { input: prevState.input }
      } else {
        return { input: prevState.input + valor }
      }
    })    

    // if (arrInput[0] === '0' && arrInput[1] !== '.') {
    //   arrInput.splice(0, 1);
      
    //   this.setState({
    //     input: arrInput.join('') + valor
    //   })
    //   return
    // }
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