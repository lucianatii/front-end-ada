const prompt = require("readline-sync");

// let i;

let maiorNumero = 0;
let numInformado;

for (let i = 0; i < 5; i++) {
  numInformado = Number(prompt.question("Informe um número positivo: "));

  while (numInformado < 0) {
    numInformado = Number(prompt.question("Informe um número positivo: "));
  }

  if (numInformado > maiorNumero) {
    maiorNumero = numInformado;
  }
}

console.log("Maior número: ", maiorNumero);
