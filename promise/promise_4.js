/*
Crea una Promise che simula il recupero dei dati da un'API. 

A volte la richiesta avrà successo, 
a volte fallirà con un messaggio di errore. 

- Crea una variabile chiamata 'success' con un valore numerico random da 0 a 0.5;

- La chiamata avrà successo con il messaggio "Data retrieved successfully", se il valore random è inferiore a 0.5, 
altrimenti fallisce con il messaggio "Error: Failed to fetch data".


NB:
let success = Math.random() * 0.5;
La variabile 'success' viene generata come un numero casuale tra 0 e 0.5. 

Questo significa che il valore di 'success' sarà sempre inferiore a 0.5, 
quindi la Promise si risolverà sempre con successo e non fallirà mai.

Per far sì che la Promise possa anche fallire, 
si dovrebbe generare un numero casuale tra 0 e 1. 

let success = Math.random();
In quanto il metodo 'math.random', appunto, genera un numero casuale tra 0 e 1.

In questo modo, ci sarà una probabilità del 50% che 
il numero generato sia inferiore a 0.5 (la richiesta avrà successo) 
o superiore a 0.5 (la richiesta fallirà).
*/

function fetchDataFromAPI() {
  return new Promise((resolve, reject) => {
    let success = Math.random();
    if (success < 0.5) {
      resolve(`Data retrieved successfully`);
    } else {
      reject(new Error(`Error: Failed to fetch data`));
    }
  })
}

fetchDataFromAPI().then((data) => {
  console.log(data);
}).catch((error) => {
  console.log(error);
})