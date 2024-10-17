//TRABALHANDO COM PROMISES

const fs = require("fs");

console.log("ANTES da promise");

//criando função que retornará uma promise
function lerArquivo() {
  return new Promise((resolve, reject) => {
    fs.readFile(
      "../JavaScript/aula13/callback-functions/arquivo.txt", //link do arquivo a ser lido
      (erro, conteudoDoArquivo) => {
        //callback function
        if (erro) {
          reject("Ocorreu um erro ao tentar ler o arquivo", erro); //msg de erro caso o arquivo nao possa ser lido
        } else {
          //caso contrário...
          resolve(String(conteudoDoArquivo)); //exibição do arquivo
        }
      }
    );
  });
}

lerArquivo()
  .then((retornoResolve) => {
    console.log("Tudo certo!", retornoResolve);
  })
  .catch((erro) => {
    console.log("Xiii...deu erro.", erro);
  })
  .finally(() => {
    console.log(
      "Essa msg será executada ao final da promise, independente de seu sucesso ou fracasso."
    );
  });
