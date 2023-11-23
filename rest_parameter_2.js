/*
Scrivi una funzione 'filterOutOdds', 
che accetta un numero qualsiasi di argomenti 
e restituisce un array contenente solo i numeri pari.

Utilizzare il parametro rest per raccogliere gli argomenti.
*/

function filterOutOdds(...params) {
  
  let evenNumbers = params.filter(param => param % 2 === 0);  

  return evenNumbers;
  
}

console.log(filterOutOdds(1, 2, 3, 4, 5, 6, 7));