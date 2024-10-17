//ASYNC transforma a funcao em assíncrona
//AWAI me ajuda a determinar o que eu quero que venha primeiro

const fs = require("fs"); //biblioteca de leitura de dados

//criando função para ler o meu arquivo. Essa função retornará uma promise:
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

// lerArquivo()
//   .then((retornoResolve) => {
//     console.log("Tudo certo!", retornoResolve);
//   })
//   .catch((erro) => {
//     console.log("Xiii...deu erro.", erro);
//   })
//   .finally(() => {
//     console.log(
//       "Essa msg será executada ao final da promise, independente de seu sucesso ou fracasso."
//     );
//   });

//criando função assíncrona para obter meus dados na tela.
async function leituraDados() {
  console.log("Msg executada antes da resolução da Promise");

  //tente ler o que se pede dentro das chaves
  try {
    const arquivoLido = await lerArquivo(); //retono da Promise espera (await) a promise lerArquivo ser executada

    console.log(arquivoLido); //retorna a resolução da Promise

    console.log("Msg executada depois da resolução da Promise"); //e só depois executa essa msg.
  } catch (err) {
    //caso encontre algum tipo de erro...
    console.log("Querida, não consegui ler o arquivo, tá?");
  } finally {
    console.log("msg executada em caso de sucesso ou fracasso do try/catch");
  }
}

leituraDados(); //chamando função
