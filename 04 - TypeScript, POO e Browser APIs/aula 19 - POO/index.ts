interface IGatos {
  //atributos
  nome: string;
  idade: number;
  raca: string;
  tutor: string;
  castrado: boolean;
  filhote: boolean;   
  
  //métodos
  comer: () => void;
  dormir: () => void;
  brincar: () => void;
}

//classe = conjunto de caracteristicas (atributos) e ações (métodos) de um objeto
class Gatos implements IGatos {
  //atributos = caracteristicas para um grupo de gatos
  nome: string;
  idade: number;
  raca: string;
  readonly tutor: string; //Quando um atributo é declarado como readonly, ele pode ser lido mas não pode ser modificado.
  castrado: boolean;
  filhote: boolean;
  private _cor: string; //Quando um atributo é declarado como private, ele só pode ser acessado e modificado dentro da própria classe onde foi definido.

 //métodos = ações (funções) de um grupo de gatos
 constructor ( nome: string,
  idade: number,
  raca: string,
  tutor: string,
  castrado: boolean,
  filhote: boolean,
  cor: string) {
    this.nome = nome,
    this.idade= idade,
    this.raca = raca,
    this.tutor = tutor,
    this.castrado = castrado,
    this.filhote = filhote,
    this._cor = cor
  }

  comer() {
    console.log("Está comendo...")
  }
  dormir() {
    console.log("Está dormindo...")
  }
  brincar(){
    console.log("Está brincando...")
  }

  //accessor: getter //permite que eu acesse uma propriedade privada
  get cor (): string {
    return this._cor
  }

  //accessor: setter //permite que eu altere uma propriedade privada
  set cor (newCor: string ){
    this._cor = newCor
  }

  //exemplo prof - utilizando pessoa
  //set cpf (newCpf: string) {
  //if (newCpf.length !== 14) {
  //throw new Error ("CPF length is incorrect")
  //} 
  //this._cpf = newCpf;
  //}
}

//criando um novo objeto gatinho (instanciando)
const gatinho = new Gatos("Abigail", 12, "Siamês", "Luciana", true, false, "marrom" )

console.log(gatinho)
console.log(gatinho.cor)
gatinho.cor = "preto" 
gatinho.comer()