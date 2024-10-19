import React from "react";
import "./assets/styles/App.css";
import Header from "./components/Header/Header";

//Componentes em classes são classes que herdam a classe Component do React e retornam HTML dentro do método render

class App extends React.Component {
  //render é um método responsável por renderizar todo o conteudo HTML do nosso componente
  render() {
    return (
    <Header />
    )
  }
}

export default App;
