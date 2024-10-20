import React from "react";
import "./assets/styles/App.css";
import { Header } from "./components/Header/Header";
import { Article } from "./components/Article/Article";
import article1 from "./assets/img/article1.png";
import article2 from "./assets/img/article2.png";
import article3 from "./assets/img/article3.png";


//Componentes em classes são classes que herdam a classe Component do React e retornam HTML dentro do método render

class App extends React.Component {
  //render é um método responsável por renderizar todo o conteudo HTML do nosso componente
  render() {
    return (
      //tag genérica fragment <></>
      <>
        <Header/>

        <section id="articleList">
        <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, quos magni odio distinctio ipsam sequi consequuntur quo aspernatur at obcaecati eveniet quidem maxime vero beatae ad est atque quia!"
        thumbnail={article1}/>

        <Article title="Vibrant Portraits of 2020" provider="SpaceNews" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, quos magni odio distinctio ipsam sequi consequuntur quo aspernatur at obcaecati eveniet quidem maxime vero beatae ad est atque quia!"
        thumbnail={article2}/>

        <Article title="36 Days of Malayalam type" provider="SpaceFlight Now" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, quos magni odio distinctio ipsam sequi consequuntur quo aspernatur at obcaecati eveniet quidem maxime vero beatae ad est atque quia!"
        thumbnail={article3}/>

        <Article title="Designing Dashboards" provider="NASA" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum non, quos magni odio distinctio ipsam sequi consequuntur quo aspernatur at obcaecati eveniet quidem maxime vero beatae ad est atque quia!"
        thumbnail={article1}/>
        </section>
        
      </>
    
    )
  }
}

export default App;
