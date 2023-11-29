/*
Riscrivi la funzione 'fetchDataFromAPI' dell'esercizio "callback_6", 
utilizzando Promises per una migliore gestione degli errori.

La promise dovrebbe risolversi con i dati e rifiutare con un messaggio di errore.
*/

function fetchDataFromAPI(ok) {
  const object = { name: "John", age: 30 };
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (ok === true) {
        resolve(object);
      } else {
        reject('Ko');
      }
    }, 2000)
  });
}

fetchDataFromAPI(false).then(person => {
  console.log(person);
}).catch(error => {
  console.log(error);
})