/*
Crea una semplice Promise che si risolve dopo un ritardo di 2 secondi. 

Utilizzare setTimeout per simulare un'operazione asincrona.
*/

console.log(`Grazie per l'attesa...`)

function simplePromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`Promise risolta!`)
    }, 2000);
  })
}

simplePromise().then((data) => {
  console.log(data)});