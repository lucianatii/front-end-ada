(()=>{"use strict";console.log("Olá Luh!");const e=document.querySelector("#search-form"),n=document.querySelector("#input-location"),t=document.querySelector("#weather-info");null==e||e.addEventListener("submit",(e=>{return o=void 0,a=void 0,r=function*(){if(e.preventDefault(),!n||!t)return;const o=n.value;if(o.length<3)alert("Localização precisa ter pelo menos 3 caracteres");else try{const e=yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=${o}&appid=005f727e98cb13efdb1e91db1d26cf5a&lang=pt_br&units=metric`),n=yield e.json(),a={local:n.name,temp:Math.round(n.main.temp),icon:`https://openweathermap.org/img/wn/${n.weather[0].icon}@2x.png`};t.innerHTML=`\n  <div class = "info">\n  <h2>${a.local}</h2\n  <span>${a.temp}ºC</span>\n  </div>\n\n  <img src="${a.icon}"/>`}catch(e){console.log("Erro ao obter os dados da API")}},new((c=void 0)||(c=Promise))((function(e,n){function t(e){try{l(r.next(e))}catch(e){n(e)}}function i(e){try{l(r.throw(e))}catch(e){n(e)}}function l(n){var o;n.done?e(n.value):(o=n.value,o instanceof c?o:new c((function(e){e(o)}))).then(t,i)}l((r=r.apply(o,a||[])).next())}));var o,a,c,r}))})();