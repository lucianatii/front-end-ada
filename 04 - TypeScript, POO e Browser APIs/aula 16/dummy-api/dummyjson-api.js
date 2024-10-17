//LISTANDO TODOS OS USUÁRIOS
async function getUsers () { //criando função assíncrona de nome getUsers
  const resposta = await fetch('https://dummyjson.com/users') //resposta aguarda o resultado de fetch
  const user = await resposta.json() //user recebe o resultado e transforma num arquivo json
  console.log(user.users) //exibo user no console e acrescento .users pra chegar direto ao array dos usuários
}

getUsers() //chamando função

//--------------------------------------------------------------------------
//PEGANDO UM USUÁRIO
async function getUser () {

  const response = await fetch('https://dummyjson.com/users/1')
  const singleUser = await response.json()
  console.log(singleUser)

}

getUser()

//--------------------------------------------------------------------------
//CRIANDO NOVO USUÁRIO
async function createNewUser () {  
  //const response = //nao pego a resposta de fetch pq nesse momento quero apenas q ele crie o usuário no banco de dados
  //vou pedir apenas q ele tente criar o usuário e se der certo, ok...se nao, acuse o erro.
try {
  const response = await fetch('https://dummyjson.com/users/add', { 
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName: 'Ana',
        lastName: 'Silva',
        age: 250,
      })
    }
  )

  const newUser = await response.json()
  console.log(newUser)

  } catch (erro) {
    console.log ("Erro ao tentar criar um novo usuário!", erro)
  } finally {
    console.log("Requisição finaliza aqui")
  }
}

createNewUser() //chamando função

//--------------------------------------------------------------------------
//DELETANDO USUÁRIO
async function deleteUser () {

  const response = await fetch('https://dummyjson.com/users/1', {
    method: 'DELETE'
  })

  const userDeleted = await response.json()
  console.log(userDeleted)
}

deleteUser()