//UTILIZANDO EVERY
//Verifica se todos os itens de um array seguem uma determinada condição determinada pela função

const numeros = [10, 15, 17, 88, 92, 100];

const positivos = numeros.every((item) => item > 92); //percorre cada item do array e verifica se todos são positivos. Se sim, retorna true. Caso contrário, retorna false.

console.log(positivos);
console.clear();

//--------------------------------------------------------
//UTILIZANDO SOME
//Verifica se alguns itens de um array seguem uma determinada condição determinada pela função

const numeros2 = [-1, 2, 5, -3, 1];

const positivos2 = numeros2.some((item) => item > 0); //ao contrário de every, some vai verificar se algum dos itens do array sao positivos.

console.log(positivos2); //retorno true, pq alguns sao positivos
