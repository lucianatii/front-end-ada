// console.log(document.title)
// console.log(document.URL)

//UTILIZANDO DOCUMENT PARA SELECIONAR ELEMENTOS HTML

//SELECIONANDO PELO NOME DA TAG
const allH1 = document.getElementsByTagName("h1")

console.log(allH1)

//-----------------------------------------------------------------------------------------
//PELO NOME DA CLASSE
const allClassP = document.getElementsByClassName("paragrafo")
console.log(allClassP)

//-----------------------------------------------------------------------------------------
//PELO NOME 
const emailInput = document.getElementsByName("email")
console.log(emailInput)

//-----------------------------------------------------------------------------------------
//PELA  ID
const jsLogo = document.getElementById("js-logo")
console.log(jsLogo)

//-----------------------------------------------------------------------------------------
//PELO SELETOR - QUERY SELECTOR
// const imgLogo = document.querySelector("body > img")
const imgLogo = document.querySelector("body > img#js-logo")
console.log(imgLogo)

//-----------------------------------------------------------------------------------------
//PEGANDO TODOS OS ELEMENTOS COM QUERY SELECTOR
const allParagrafos = document.querySelectorAll("p")
console.log(allParagrafos)

console.clear()

const primeiroParagrafo = document.querySelector("p.paragrafo")
console.log(primeiroParagrafo)

//-----------------------------------------------------------------------------------------
//PEGANDO E ALTERANDO ELEMENTOS COM JS
console.log("textContent:", primeiroParagrafo.textContent)
console.log("innerHTML:", primeiroParagrafo.innerHTML)

primeiroParagrafo.textContent = "Alterando o texto através de JS." //textContent nao considera tags, somente texto
primeiroParagrafo.innerHTML = "<strong>Alterando o texto através de JS.</strong>" //innerHTML considera tags e texto
console.clear()

emailInput[0].value = "luciana@email.com"
//-----------------------------------------------------------------------------------------

//CRIANDO, ALTERANDO E REMOVENDO ELEMENTOS
const listaUL = document.querySelector("ul#lista") //obtendo minha lista com query selector e jogando dentro da variavel listaUL
const listaLis = document.querySelectorAll("ul > li")

const novaTagLi = document.createElement("li") //crio uma nova tag do tipo "li" e jogo dentro da variavel novaTagLi
novaTagLi.textContent = "Item 2" //textContent para inserir o texto na minha tag
// listaUL.appendChild(novaTagLi) 
console.log(novaTagLi)

listaUL.insertBefore(novaTagLi, listaLis[1])

listaUL.removeChild(listaLis[0]) //removendo elemento da lista


