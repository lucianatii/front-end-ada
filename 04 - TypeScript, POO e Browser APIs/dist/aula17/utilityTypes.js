"use strict";
//UTILITY TYPES - permitem que sejam criados novos tipos a partir de tipos já existentes
//nesse exemplo, CatName é um tipo que contem tres strings. Posteriormente, criei um novo tipo "Cats" utilizando as propriedades do tipo já existente "CatName"
const myCats = {
    miffy: { age: 10, breed: "Persian" }, //chave miffy: valor: idade e raça
    boris: { age: 5, breed: "Maine Coon" }, //chave boris: valor: idade e raça
    mordred: { age: 16, breed: "British Shorthair" } //chave mordred: valor: idade e raça
};
myCats.mordred;
