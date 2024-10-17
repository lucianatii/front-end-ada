//UTILITY TYPES - permitem que sejam criados novos tipos a partir de tipos já existentes

//PARTIAL
type Persona = {
  nome: string,
  idade: number,
  profissao: string,
  altura?:number
}

type PersonaPartial = Partial<Persona> //ao utilizar Partial e envolver entre <> o nome de alguma tipagem ou interface construida anteriormente, como 'Persona', por exemplo...todas as propriedades desta tipagem se tornam opcionais.

//------------------------------------------------------------------

//REQUIRED
type PersonRequired = Required<Persona> //ao utilizar Required e envolver entre <> o nome de alguma tipagem ou interface construida anteriormente, como 'Persona', por exemplo...todas as propriedades desta tipagem se tornam obrigatórias.

//------------------------------------------------------------------

//PICK - escolher somente algumas propriedades de uma interface já existente

type PersonPicked = Pick<Persona, "nome" | "profissao"> //ao utilizar Pick e envolver Persona, posso escolher quais propriedades da interface Persona quero pegar. Determino isso entre aspas e separo as propriedades por um pipe |

//------------------------------------------------------------------

//OMIT - o exato contrário de Pick, OMIT omite quais propriedades de uma interface eu quiser 

type PersonOmited = Omit<Persona, "profissao">

//------------------------------------------------------------------

//EXCLUDE - exclui uma propriedade dentro de um union type
type Criterio2 = 'greater' | 'lower'

type CriterioExclude = Exclude<Criterio2, "greater">

//------------------------------------------------------------------

//RECORD - EXEMPLO DA DOCUMENTAÇÃO 

type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
type Cats = Record<CatName, CatInfo> //Record cria um novo tipo utilizando um conjunto de propriedades retiradas de outro tipo
//nesse exemplo, CatName é um tipo que contem tres strings. Posteriormente, criei um novo tipo "Cats" utilizando as propriedades do tipo já existente "CatName"

const myCats = {
  miffy: { age: 10, breed: "Persian" }, //chave miffy: valor: idade e raça
  boris: { age: 5, breed: "Maine Coon" },//chave boris: valor: idade e raça
  mordred: { age: 16, breed: "British Shorthair" }//chave mordred: valor: idade e raça
};
 
myCats.mordred
 
