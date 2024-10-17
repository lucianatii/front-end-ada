"use strict";
//HERANÇA - EXTENDS
class Puppy {
    //métodos = ações (funções) de um grupo de gatos
    constructor(name, age, breed, owner, neutered, color) {
        this.name = name,
            this.age = age,
            this.breed = breed,
            this.owner = owner,
            this.neutered = neutered,
            this._color = color;
    }
    eat() {
        console.log("Eating...");
    }
    sleep() {
        console.log("Sleeping...");
    }
    play() {
        console.log("Playing...");
    }
}
class Dog extends Puppy {
    constructor(name, age, breed, owner, neutered, color, size) {
        super(name, age, breed, owner, neutered, color);
        this.size = size;
    }
    bark() {
        console.log("Barking...");
    }
}
const doguinho = new Dog("Rick", 2, "Pastor Alemão", "Luh", true, "brown", "big");
console.log(doguinho);
doguinho.bark();
doguinho.eat();
//---------------------------------------------------------------------
//POLIMORFISMO - objetos herdeiros de uma classe mãe, podem ser tratados como objetos genéricos pertencentes a esta classe.
console.log(doguinho instanceof Puppy); //true porque doguinho(filha) é uma instancia da classe Puppy(mãe)
