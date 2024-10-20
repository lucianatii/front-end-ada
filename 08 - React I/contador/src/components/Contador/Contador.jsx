import React from "react";
import "../Contador/styles.css"

export class Contador extends React.Component {
constructor(){
  super()
  // this.contador = 0;
  this.state = {contador: 0}
}

  render (){
    return (
      <div className="container">
        
        <h1>time is passing...</h1>
        <h2>{this.state.contador}</h2>

        <div className="botoes">
          <button onClick={() => {this.setState({contador: this.state.contador + 1})}}>Aumentar</button>
          <button onClick={() => {this.setState({contador: this.state.contador - 1})}}>Diminuir</button>  
        </div>        
     
      </div>
    )
  }
}
