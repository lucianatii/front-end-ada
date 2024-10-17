//SETTIMEOUT - criando um timer

console.log("ANTES do setTimeOut...");

setTimeout(() => {
  console.log(
    "essa mensagem será executada após o tempo que defini no timer, ou seja, 2s"
  );
}, 2000);

console.log("DEPOIS do setTimeOut..."); //msg acaba sendo executada antes de setTimeOut pq setTimeOut leva mais tempo para ser processado...
