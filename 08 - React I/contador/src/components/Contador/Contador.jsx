import React from "react";
import "../Contador/styles.css";

export class Contador extends React.Component {
  constructor() {
    super();
    // this.contador = 0;
    this.state = { contador: 0, name: "", password: "" };
  }

  render() {
    return (
      <div>
        <div className="containerCounter">
          <h1>time is passing...</h1>
          <h2>{this.state.contador}</h2>

          <div className="botoes">
            <button
              onClick={() => {
                this.setState({ contador: this.state.contador + 1 });
              }}
            >
              Aumentar
            </button>
            <button
              onClick={() => {
                this.setState({ contador: this.state.contador - 1 });
              }}
            >
              Diminuir
            </button>
          </div>
        </div>

        <div className="containerForm">
          <h2>pegando valores digitados...</h2>
          <form>
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              onChange={(event) => {
                this.setState({ name: event.target.value });
              }}
            />
            <input
              type="text"
              placeholder="Password"
              value={this.state.password}
              onChange={(event) => {
                this.setState({ password: event.target.value });
              }}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
    );
  }
}
