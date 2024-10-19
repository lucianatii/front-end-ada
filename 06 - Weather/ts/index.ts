//const prompt = require('readline-syn') - maneira mais antiga de importar uma biblioteca
//import prompt from './readline-sync' - maneira mais recente de importar uma biblioteca
import { saudacao } from "./exemplo.js";

saudacao();

//pegando o form e o input
const form = document.querySelector("#search-form");
const input: HTMLInputElement | null =
  document.querySelector("#input-location");

const weatherInfo = document.querySelector("#weather-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !weatherInfo) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("Localização precisa ter pelo menos 3 caracteres");

    return; //return evita que o código continue a roda enquanto o titulo da tarefa não tiver mais do que tres caracteres
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=005f727e98cb13efdb1e91db1d26cf5a&lang=pt_br&units=metric`
    );
    const data = await response.json();

    const infos = {
      local: data.name,
      temp: Math.round(data.main.temp),
      icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
    };

    weatherInfo.innerHTML = `
  <div class = "info">
  <h2>${infos.local}</h2
  <span>${infos.temp}ºC</span>
  </div>

  <img src="${infos.icon}"/>`;
  } catch (err) {
    console.log("Erro ao obter os dados da API");
  }
});