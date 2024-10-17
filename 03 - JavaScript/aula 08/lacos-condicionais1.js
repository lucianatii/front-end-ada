const prompt = require("readline-sync");

//const saldo (mudei minha variavel pra let pq se o usuario precisa digitar de novo, entao ele está mudando esse dado. E para dados que serao modificados, eu uso let. Lá onde eu vou pedir pra ele digitar de novo, eu recebo novamente "saldo", agora ja posso fazer isso, ja q é uma variavel let)
let saldo = Number(prompt.question("Digite seu saldo: ")); //precisei converter o saldo pra Number pq o sistema definiu como string

// console.log(saldo, typeof saldo);

while (saldo < 0) {
  saldo = Number(prompt.question("Digite um saldo positivo: "));
}

console.log(saldo);
