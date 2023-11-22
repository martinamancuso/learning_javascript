/*
Dato un oggetto 'person' con le proprietà 'nome' ed 'età', 
utilizza la destrutturazione dell'oggetto per creare variabili 'nome' ed 'età' 
che contengano i valori dell'oggetto.
*/

const person = { firstName: "Alice", age: 30 };

const {firstName, age} = person;
console.log(firstName, age);