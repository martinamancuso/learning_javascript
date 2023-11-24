/*
Implementa la funzione 'lanciaDadi' che:

- Generi casualmente due numeri tra 1 e 6 per rappresentare il lancio di due dadi.

- Visualizzi in console il risultato del lancio 'Lancio dei dadi: Dado 1 = ${dado1}, Dado 2 = ${dado2}'.

- Utilizzi il metodo 'setTimeout' per ritardare l'esecuzione della funzione 'lanciaDadi' di 2 secondi.

- Prima dello scadere dei 2 secondi stampa in console il messaggio 'Lancio dei dadi in corso...'
*/

function lanciaDadi() {

  function getRandomInt(min, max) {
    let randomNumber = Math.floor(Math.random() * max) + min;
    return randomNumber;
  }
  
  let dado1 = getRandomInt(1, 6);
  let dado2 = getRandomInt(1, 6);

  console.log(`Lancio dei dadi: Dado 1 = ${dado1}`, `Dado 2 = ${dado2}`);

}

console.log('Lancio dei dadi in corso...');

setTimeout(lanciaDadi, 2000);