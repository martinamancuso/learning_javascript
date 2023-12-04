/*
Crea una Promise che simula il recupero dei dati da un'API. 

A volte la richiesta avrà successo, 
a volte fallirà con un messaggio di errore. 

- Crea una variabile chiamata 'success' con un valore numerico random da 0 a 0.5;

- La chiamata avrà successo con il messaggio "Data retrieved successfully", se il valore random è inferiore a 0.5, 
altrimenti fallisce con il messaggio "Error: Failed to fetch data".
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