//HERANÇA - EXTENDS

class Puppy  {
  //atributos = caracteristicas para um grupo de gatos
  name: string;
  age: number;
  breed: string;
  readonly owner: string; //Quando um atributo é declarado como readonly, ele pode ser lido mas não pode ser modificado.
  neutered: boolean;
  private _color: string; //Quando um atributo é declarado como private, ele só pode ser acessado e modificado dentro da própria classe onde foi definido.

 //métodos = ações (funções) de um grupo de gatos
 constructor ( name: string,
  age: number,
  breed: string,
  owner: string,
  neutered: boolean,
  color: string) {
    this.name = name,
    this.age= age,
    this.breed = breed,
    this.owner = owner,
    this.neutered = neutered,
    this._color = color
  }

  eat() {
    console.log("Eating...")
  }
  sleep() {
    console.log("Sleeping...")
  }
  play(){
    console.log("Playing...")
  }
}

class Dog extends Puppy { //Dog é uma classe que herda as mesmas propriedades de Puppy

  size: string //além das propriedades de puppy, dog tem essa nova propriedade

  constructor (
    name: string,
    age: number,
    breed: string,
    owner: string,
    neutered: boolean,
    color: string,
    size: string) {

      super (name, age, breed, owner, neutered, color )
      this.size = size
      }
      
    bark() {
      console.log("Barking...")
  }
}

const doguinho = new Dog ("Rick", 2, "Pastor Alemão", "Luh", true, "brown", "big")

console.log(doguinho)
doguinho.bark()
doguinho.eat()

//---------------------------------------------------------------------
//POLIMORFISMO - objetos herdeiros de uma classe mãe, podem ser tratados como objetos genéricos pertencentes a esta classe.
console.log(doguinho instanceof Puppy) //true porque doguinho(filha) é uma instancia da classe Puppy(mãe)