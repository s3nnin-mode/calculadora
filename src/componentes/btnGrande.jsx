import React from "react";
import '../stylesheet/btnGrande.css'

class BtnGrande extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
     <button id={this.props.id} className={this.props.className} onClick={() => this.props.f(this.props.children)}>
      {this.props.children}
     </button> 
    )
  }
}

export default BtnGrande