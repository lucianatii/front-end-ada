//definição de função
//sintaxe: function nomeDaFuncao () {}
function saudacao(nome) {
  console.log("Oiê!", nome);
  console.log("Seja bem-vindo!");
}
saudacao("Luh"); //chamada de função: nome da função + ()

console.clear();

//Template String || Template Literals

function templateString(nome, curso) {
  console.log(`Olá, ${nome}! Bem-vinda ao curso de ${curso}!`);
}

templateString("Luciana", "Sistemas para Internet");
console.clear();

//---------------------------------------------------------------

//GUARDANDO INFORMAÇOES DE FUNÇOES EM VARIÁVEIS PARA OBTER UM RETORNO

function cumprimento(nome, msg = "Que bom te ver por aqui!") {
  //defini dois parâmetros, mas...
  return `Oi, ${nome}! ${msg}`;
}
const msgCumprimento = cumprimento("Lu"); //...só passei o valor de um e vou utilizar o valor "padrao" para o segundo. Enquanto não for passado um valor para o parâmetro "msg", ele vai utilizar o default, que é "Que bom te ver por aqui!"

console.log(msgCumprimento); //imprimindo o retorno no console
console.clear();

//---------------------------------------------------------------

function somar(numero1, numero2) {
  //passando os parâmetros
  return numero1 + numero2; //definindo a função
}
const resultado = somar(2, 3); //passando valores aos parâmetros

console.log(resultado + 80); //imprimindo na tela o resultado + 80 = 85

console.clear();

//---------------------------------------------------------------

//FUNÇÕES ANÔNIMAS
//first class function

const dobroDoNum = function (numero) {
  //variável dobro recebe a funçao que vai calcular o dobro do numero
  return numero * 2;
};

const dobro = dobroDoNum(5); //variavel dobro recebe a variavel dobroDoNum (que tem uma função atribuída a ela) e passa o parâmetro 5

console.log(dobro); //console apresenta a variavel dobro e o resultado é o retorno de dobroDoNum(5) * 2 = 10
console.clear();

//---------------------------------------------------------------

//ARROW FUNCTION (SETA)
const subtrair = (numero1, numero2) => {
  //a variável subtrair recebe uma arrow function com dois parâmetros e...
  return numero1 - numero2; //...retorna a subtração
};

//posso omitir esse return, já que uma arrow function ja retorna algo, ficaria assim:
const multiplicar = (numero3, numero4) => numero3 * numero4;

//mas se houver alguma lógica dentro da minha função, várias linhas de código, vou precisar das chaves e também desse "return", que apareceria no final. Exemplo:

const somar = (numero5, numero6) => {
  if (numero5 < 5) {
    console.log("O primeiro número é menor que zero");
  }
  return numero5 + numero6;
};

const soma = somar(3, 3);
console.log(soma);

console.clear();

//POSSO OMITIR OS PARENTES NO CASO DE TER APENAS UM PARÂMETRO (deixei comentado para o prettier nao  corrigir)

// const triplo = num => num * 3; //'variável triplo' 'recebe' 'numero' 'e tem a função de' 'pegar o numero' 'e multiplicar por 3'
// let result = triplo(8); //'variável result' 'recebe' 'triplo de 8'

// console.log(result);
