// HIGH ORDER FUNCTIONS
// FUNÇÃO RETORNA OUTRA FUNÇÃO COMO PARÂMETRO

function welcome(courseName) {
  return (studentName) => {
    console.log(
      `Olá ${studentName}! Seja bem vindo(a) ao curso de ${courseName}!`
    );
  };
}

const welcomeToTheCourse = welcome("Sistemas para Internet");

welcomeToTheCourse("Luciana");

console.clear();

// ------------------- meu exemplo:

function happiness(thing) {
  return (name) => {
    console.log(`Olá! Eu sou a ${name} e o que me deixa feliz é ${thing}!`);
  };
}

const msgHapiness = happiness("conhecer novas pessoas");

msgHapiness("Luh");

console.clear();

// ------------------------------------------------
// FUNÇÃO QUE RECEBE OUTRA FUNÇÃO COMO PARÂMETRO

const somar = (num1, num2) => num1 + num2;
const subtrair = (num1, num2) => num1 - num2;
const multiplicar = (num1, num2) => num1 * num2;
const dividir = (num1, num2) => num1 / num2;

//resultado recebe a função calcular, que realizará a operação escolhida quando este parâmetro for definido ao chamar a função
//calcular precisa necessariamente que sejam passados dois numeros como parâmetros, para que possa então, realizar a operação

const resultado = (num1, num2, calcular) => calcular(num1, num2); //calcular retorna um numero que precisa de uma variavel para ser exibido. Vou chamá-la de retorno.

const retorno = resultado(20, 10, multiplicar);

console.log(retorno);

//------------------------------------------------

const operacaoMaluca = resultado(
  2,
  3,
  (num1, num2) => num1 * num2 + 2 * num1 * num2
);

console.log(operacaoMaluca);

//------------------------------------------------
//mais um exemplo da primeira função (pra fixar)

function time(nomeDoTime) {
  return (nome) => {
    console.log(`Oi, eu sou a ${nome} e torço para o ${nomeDoTime} `);
  };
}

const meuTime = time("São Paulo!"); //essa variável funciona como uma função
meuTime("Luh"); //e aqui eu chamo essa função

console.clear;
