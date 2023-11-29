/*
Scrivi una funzione chiamata 'filterArray' che accetta come argomenti un array e una funzione di callback. 

La funzione di callback deve
filtrare e restituire i numeri pari
passati come argomento alla funzione 'filterArray'.

'filterArray' dovrebbe restituire un nuovo array
contenente solo gli elementi per i quali la funzione di callback restituisce 'true'.
*/

function filterArray(arr, callback) {
  const newArray = arr.filter(element => callback(element));
  return newArray;
}

function isEven(num) {
  return num % 2 === 0;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = filterArray(numbers, isEven);
console.log(evenNumbers); // Should output [2, 4, 6]