/*
Crea una funzione chiamata 'runCallbacks' che accetta un array di funzioni di callback come argomento.
La funzione dovrebbe eseguire ogni callback nell'ordine in cui appaiono nell'array.
*/

const callbackArray = [firstCallback, secondCallback, thirdCallback];

console.log("Sto iniziando a chiamare le callback...");

function runCallbacks(callbacks) {
  callbacks.forEach(callback => callback());
}

function firstCallback() {
  console.log("Sono la prima")
}


function secondCallback() {
  console.log("Sono la seconda")
}


function thirdCallback() {
  console.log("Sono la terza");
}

runCallbacks(callbackArray);