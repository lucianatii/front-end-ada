import React from "react";
import "../Lifecycle/style.css";
import Counter from "../Counter/Counter.jsx";

class Lifecycle extends React.Component {
  constructor() {
    super();
    this.state = { showCounter: false };
  }

  render() {
    return (
      <div className="container">
        <h1>Ciclo de Vida - React</h1>

        <button
          onClick={() => {
            this.setState({ showCounter: !this.state.showCounter });
          }}
        >
          {this.state.showCounter ? "Remover Contador" : "Mostrar Contador"}
        </button>

        {this.state.showCounter ? <Counter /> : null}
        {/* {this.state.showCounter && <Counter */}
      </div>
    );
  }
}

export default Lifecycle;
