//FETCH API

//then/catch
// fetch('https://viacep.com.br/ws/01001000/json/').then((resposta) => {
//  resposta.json().then(dados => console.log(dados))

// }).catch((erro) => {
// console.log("Erro!"), erro
// })

//async/await

async function obterDadosCep() {
  try {
    const resposta = await fetch('https://viacep.com.br/ws/01001000/json/')
    const dados = await  resposta.json()
    console.log(dados)
  } catch (erro) {
    console.log("Poxa, deu erro", erro)
  } finally {
  console.log ("Fim da Requisição")
  }
}

obterDadosCep()