import React from "react";

//Componentes em classes são classes que herdam a classe Component do React e retornam HTML dentro do método render

class App extends React.Component {
  constructor() {
    super();
    this.nome = "Luciana";
  }

  //render é um método responsável por renderizar todo o conteudo HTML do nosso componente
  render() {
    return (
      <div>
        <h1>First Project</h1>
        <h2>{this.nome}</h2>
        <p>Primeiro páragrafo</p>
      </div>
    );
  }
}

export default App;
