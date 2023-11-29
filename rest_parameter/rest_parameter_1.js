/*
Crea una funzione chiamata 'somma' che accetta un numero qualsiasi di argomenti 
e restituisce la somma di tali argomenti.

Utilizza il parametro rest per raccogliere gli argomenti. 
Stampa in console l'output della funzione somma.
*/

function somma(...params) {
  
  let sum = params.reduce((a, param) => a + param, 0);
  
  return sum;

}

console.log(somma(6, 7, 8));