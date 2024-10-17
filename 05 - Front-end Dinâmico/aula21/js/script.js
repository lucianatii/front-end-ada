//ADICIONANDO EVENTO DE CLICK - CONSTRUINDO UM CONTADOR

const botaoAumentar = document.querySelector("#aumentar"); //botaoAumentar linkado ao elemento html #aumentar
const botaoDiminuir = document.querySelector("#diminuir"); //botaoDiminuir linkado ao elemento html #diminuir

const meuContador = document.querySelector("#contador"); //meuContador linkado ao elemento html #contador

//botaoAumentar adiciona um evento do tipo click, dentro da função anônima vão os comandos...
botaoAumentar.addEventListener("click", (event) => {
  //...valor atual recebe o texto no h2 definido no html (0) e transforma esse texto em numero
  const valorAtual = Number(meuContador.textContent);
  //...então o contador recebe o esse numero e acrescenta +1
  meuContador.textContent = valorAtual + 1;
});

botaoDiminuir.addEventListener("click", (event) => {
  const valorAtual = Number(meuContador.textContent);

  meuContador.textContent = valorAtual - 1;
});

//---------------------------------------------------------------
//EVENTO INPUT: VISUALIZANDO O VALOR DIGITADO

const input = document.querySelector("#meuInput");

input.addEventListener("input", () => {
  console.log(input.value);
});

//---------------------------------------------------------------
//ADICIONANDO ELEMENTOS INLINE NO CONTADOR
//ALTERANDO CSS COM JS (STYLE)

meuContador.style.color = "purple";
meuContador.style.padding = "4rem";
// meuContador.style.backgroundColor = "pink";
meuContador.style.width = "300px";
meuContador.style.border = "2px solid blue";

//---------------------------------------------------------------
//MANIPULANDO CLASSES ATRAVÉS DE JS
//classList permite adicionar ou remover classes de um elemento

console.log(botaoDiminuir.classList); //inspecionando a classe do botao diminuir

botaoAumentar.classList.add("btn"); //adiciona a classe btn ao botao aumentar sem modificar o html
botaoDiminuir.classList.remove("btn"); //remove a classe btn do botao diminuir sem modificar o html

//ALTERNANDO AS CORES DOS BOTÕES

const botaoPrimeiro = document.querySelector("#primeiro");
const botaoSegundo = document.querySelector("#segundo");

botaoPrimeiro.addEventListener("click", (event) => {
  botaoPrimeiro.classList.add("cor");
  botaoSegundo.classList.remove("cor");
});

botaoSegundo.addEventListener("click", (event) => {
  botaoPrimeiro.classList.remove("cor");
  botaoSegundo.classList.add("cor");
});

//ALTERANDO TEMA DA PÁGINA (LIGHT/DARK)

const botaoTheme = document.querySelector("#theme");

let darkTheme = false; //variavel de controle - inicia como false, ou seja, modo escuro desligado

botaoTheme.addEventListener("click", (event) => {
  darkTheme = !darkTheme; //darkTheme recebe o contrário dele
  const body = document.querySelector("body");

  if (darkTheme) {
    body.style.backgroundColor = "black";
    body.style.colorText = "white";
  } else {
    body.style.backgroundColor = "white";
    body.style.colorText = "black";
  }
});
