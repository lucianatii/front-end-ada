"use strict";
//classe = conjunto de caracteristicas (atributos) e ações (métodos) de um objeto
class Gatos {
    //métodos = ações (funções) de um grupo de gatos
    constructor(nome, idade, raca, tutor, castrado, filhote, cor) {
        this.nome = nome,
            this.idade = idade,
            this.raca = raca,
            this.tutor = tutor,
            this.castrado = castrado,
            this.filhote = filhote,
            this._cor = cor;
    }
    comer() {
        console.log("Está comendo...");
    }
    dormir() {
        console.log("Está dormindo...");
    }
    brincar() {
        console.log("Está brincando...");
    }
    //accessor: getter //permite que eu acesse uma propriedade privada
    get cor() {
        return this._cor;
    }
    //accessor: setter //permite que eu altere uma propriedade privada
    set cor(newCor) {
        this._cor = newCor;
    }
}
//criando um novo objeto gatinho (instanciando)
const gatinho = new Gatos("Abigail", 12, "Siamês", "Luciana", true, false, "marrom");
console.log(gatinho);
console.log(gatinho.cor);
gatinho.cor = "preto";
gatinho.comer();
