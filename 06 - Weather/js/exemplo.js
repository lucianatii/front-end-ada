//maneira antiga de exportar uma funcao(commonJS):
//module.exports = () => {}
//maneira mais atual (ESModules):
export function saudacao() {
    console.log(`Olá ${nome}!`);
}
export const nome = "Luh";
