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

    //após a montagem do componente, inicie um evento de rolagem de página
    document.addEventListener("scroll", this.eventScroll)
    }

    //para adicionar e remover eventos ao montar e desmontar componentes, preciso criar uma função externa e passá-la no componentDidMount e no componentWillUnmount


  //método chamado sempre que uma prop ou estado forem atualizados
  shouldComponentUpdate() {

    return true
    // return false - o componente nunca será atualizado mesmo que a prop ou estado sejam alterados

    //no momento que o contador for igual a 2, ele nao atualizará o estado e com isso, o numero 3 nao será exibido
    // if(this.state.contador === 2)return false;
    //  return true    
  }

  UNSAFE_componentWillUpdate() {
    console.log("Componente será atualizado");
  }

  componentDidUpdate(){
    console.log("O componente foi atualizado")
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

  componentWillUnmount(){
    console.log("Componente será desmontado")

    //removendo evento de rolagem
    document.removeEventListener("scroll", this.eventScroll)
  }
  eventScroll() {
    console.log("Rolando a página")
  }
   
}

export default Counter;
