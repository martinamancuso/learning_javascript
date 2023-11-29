/*
Partendo dall'esercizio 'callback_5', 
includi la gestione degli errori.

Se la funzione di callback genera un errore, catturalo e gestiscilo.

Modificare la funzione 'performOperation' per gestire l'errore e registrare un messaggio di errore.
*/

function performOperation(a, b, callback) {
  const sum = a + b;
  if (typeof sum != "number") {
    callback(new Error('La tua somma non è un numero'), null)
  } else {
    callback(null, sum);
  }
}

function displayResult(error, sum) {
  if (error) {
    console.log(error);
  } else {
    console.log(`Il risultato della somma è: ${sum}`);
  }
}


performOperation("8", 3, displayResult);