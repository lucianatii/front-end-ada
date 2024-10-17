const fs = require('fs');

// dados: buffer com o arquivo package.json
fs.readFile('package.json', (erro, dados) => {
  if(erro){
    console.log('Erro: Não consegui ler o arquivo', erro);
  } else {
    console.log(JSON.parse(dados)); //convertendo buffer para um objeto de JS e guardando na const dadosObjeto    
  }
});

//convertendo JSON em formato de string para um objeto:

const jsonString = '{"nome": "Luh"}'; //json => string
console.log(JSON.parse(jsonString));

//convertendo objeto JS em arquivo JSON
const pessoa = {
  nome: 'Luh', //objeto js => json
  curso: 'Sistemas para Internet'
};

console.log(JSON.stringify(pessoa)); //passo um objeto para o stringfy converter em uma string em formato json