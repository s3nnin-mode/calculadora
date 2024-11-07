import React, { Children } from "react";
import '../stylesheet/boton.css'

class Boton extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <button id={this.props.id} className="boton" onClick={() => this.props.f(this.props.children)}>
          {this.props.children}
      </button>
    )
  }
}

export default Boton;