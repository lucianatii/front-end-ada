//PROGRAMAÇÃO ASSÍNCRONA
//leitura de arquivo - funcao assincrona - leva algum tempo

const fs = require("fs"); //biblioteca node para leitura de arquivos

//1. callbacks (funcao de retorno)

console.log("ANTES DE LER O ARQUIVO");

fs.readFile(
  "./JavaScript/aula13/callback-functions/arquivo.txt", //link do arquivo a ser lido
  (erro, conteudoDoArquivo) => {
    //callback function
    if (erro) {
      console.log("Ocorreu um erro ao tentar ler o arquivo", erro); //msg de erro caso o arquivo nao possa ser lido
    } else {
      //caso contrário...
      console.log(String(conteudoDoArquivo)); //exibição do arquivo
    }
  }
);

console.log("DEPOIS DE LER O ARQUIVO"); //Devido ao gerenciamento do processador, mesmo tendo sido codificada depois do chamado do arquivo, essa mensagem surge na tela primeiro, pq "é mais fácil" exibir um texto. A mensagem leva menos tempo para ser processada do que o arquivo o qual o javaScript ainda precisa ir atrás, ler e exibir...por isso ela surge primeiro.
