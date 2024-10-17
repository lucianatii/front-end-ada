//TIPAGEM DE DADOS EM TS

//VARIÁVEL TIPO NUMBER
let numero:number = 10 //inferência de tipo, TypeScript identifica que a variável é do tipo number mesmo que eu não tenha definido

//--------------------------

//VARIÁVEL DENTRO DE UMA CONST
const pi = 3.1415 //como pi é uma const e, portanto, não pode mudar seu valor, o TS define que o tipo de pi é 3.1415

//--------------------------

//VARIÁVEL TIPO STRING
let nome:string = "Luciana"

//--------------------------

//VARIÁVEL TIPO BOOLEAN - entende-se que qdo eu for definir o valor dela, as unicas possibilidades serao true / false
let correto: boolean
correto = true

//--------------------------

//TIPAGEM DE INPUT NO PROMPT
const nomeUsuario = prompt("Qual é o seu nome?")
console.log(nomeUsuario?.toUpperCase()) //? é um operador que identifica se o tipo do input corresponde ao esperado "string ou null". Se for string, ele transforma para caixa alta como foi solicitado. 

//--------------------------

//TIPAGEM DE ARRAYS
const numeros1:number [] = [1, 2, 3, 4, 5] //forma mais atual
const numeros2:Array<number> = [1, 2, 3, 4, 5] 

const misto = ['one', 'two', 3, 4, 5] //nao é uma boa prática misturar tipos de dados em um array no ts

//--------------------------

//FILTRAR ARRAY TIPO NUMBER
const idades:number[] = []
idades.push(29)
idades.push(18)
idades.push(11)
idades.push(41)
idades.push(22)

const menores = idades.filter((idade) => idade <= 18) //nao preciso definir novamente o tipo pq o ts ja identificou que meu array só contem numeros
console.log(menores)

//-----------------------------------------------------------------

//TUPLA - variável que contem multiplos dados mas que não podem ser alterados, imutáveis
//TIPAGEM DE TUPLA
const pessoaTupla: [string, number] = ["Luh", 38] //pq o array pessoa sempre terá essas duas informações, ele é uma tupla

//-----------------------------------------------------------------

//OBJECT TYPES (INTERFACE OU TYPE)
//INTERFACE: define a estrutura de um objeto especificando as propriedades que ele deve ter (semelhante à classe no c#)
interface Person { 
  nome: string,
  idade: number,
  curso: string,
  altura?: number //propriedade opcional
}
const pessoa: Person = {
  nome: "Luh",
  idade: 38,
  curso: "Sistemas para Internet"
}

//-----------------------------------------------------------------

//TYPE ALIASES (lembrar de utilizar pascal case)
type SecondPerson = { 
  nome: string,
  idade: number,
  curso: string,
  altura?: number
}

//-----------------------------------------------------------------

//TIPAGEM EM FUNÇÕES UTILIZANDO TYPE ALIASES
//criei um tipo Critério que será definido como maior ou menor
type Criterio = 'greater' | 'lower' 

//função: escolha um numero(num1:tipo number, num2: tipo number, criterio opcional: tipo Criterio)
//parâmetros opcionais devem vir após os parâmetros obrigatórios
// "": number" após os parâmetros da função, significa que minha função retorna um num
function chooseNumber(num1:number, num2:number, criterio?: Criterio) : number {

  switch(criterio) //utilizando switch para escolher o criterio nos casos a seguir:
  {
    //critério "maior" (de acordo com os parâmetros que passei): se o num1 for maior que o num2, entao retorne o num1, se não, retorne o num2
    case 'greater':
    return num1 > num2 ? num1 : num2;

    //critério "menor" (de acordo com os parâmetros que passei): se o num1 for menor que o num2, entao retorne o num1, se não, retorne o num2
    case 'lower':
    return num1 < num2 ? num1 : num2;

    //default (nao passei nenhum critério): variável numAleatorio recebe biblioteca Math.random(), que retorna um numero entre 0 e 1.
    //se o numero aleatorio for maior ou igual a 0.5, retorne o num1, caso contrário, retorne num2
    default:
      const numAleatorio = Math.random ()

      if (numAleatorio >= 0.5) return num1;
      return num2   
  }  
}
//numEscolhido recebe os parâmetros da função chooseNumber(num1, num2)
const numEscolhido = chooseNumber (10, 25, 'greater')
//exiba na tela o numEscolhido
console.log(numEscolhido)

//-----------------------------------------------------------------

//FUNÇÃO NAO RETORNA UM VALOR :void
function soma (numero1:number, numero2:number) : void {
}
