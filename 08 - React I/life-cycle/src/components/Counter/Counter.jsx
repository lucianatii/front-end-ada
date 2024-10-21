import React from "react";

class Counter extends React.Component {
  constructor() {
    super();
    this.state = { contador: 0 };
    console.log("Construindo a Classe");
  }

  UNSAFE_componentWillMount() {
    console.log("Componente contador será montado");
  }

  componentDidMount() {
    console.log("Componente ja foi montado, ok?");
  }



  render() {
    console.log("Renderizando componente")
    return (
      <div>
        <h2>{this.state.contador}</h2>        

        <button
          onClick={() => {
            this.setState({ contador: this.state.contador + 1 });
          }}
        >
          Aumentar
        </button>
        <button onClick={() => {
            this.setState({ contador: this.state.contador - 1 });
          }}>Diminuir</button>
      </div>
    );
  }
}

export default Counter;
